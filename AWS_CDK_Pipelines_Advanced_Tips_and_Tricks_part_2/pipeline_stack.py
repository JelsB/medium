from my_pipeline.configuration import RawConfig, AppConfig, ResourceConfig
# ...


class PipelineStack(core.Stack):

    def __init__(self, scope: core.Construct, pipeline_id: str, raw_config: RawConfig,
                 app_config: AppConfig, **kwargs: Any) -> None:
        super().__init__(scope, pipeline_id, **kwargs)

        self._app_config = app_config
        self._raw_config = raw_config

        # Pipeline setup where app_config is used
        # ...
        source_action = cpactions.CodeCommitSourceAction(
            output=source_artifact,
            action_name='AWS_Code_Commit',
            repository=Repository.from_repository_name(self,
                                                       self._app_config.application_name,
                                                       self._app_config.repository_name),
            branch=self._app_config.branch
        )
        # ...
        pipeline = CdkPipeline(self, 'pipeline',
                               source_action=source_action,
                               # ...
                               )

        # DEVELOPMENT ENVIRONMENT
        dev_config = ResourceConfig.from_raw_config(self._raw_config.dev)
        dev_my_stage = MyStage(self, 'dev-my-stage', dev_config)
        dev_stage = pipeline.add_application_stage(dev_my_stage)

        # STAGING ENVIRONMENT
        staging_config = ResourceConfig.from_raw_config(self._raw_config.staging)
        staging_my_stage = MyStage(self, 'staging-my-stage', staging_config)
        staging_stage = pipeline.add_application_stage(staging_my_stage)

        # PRODUCTION ENVIRONMENT
        production_config = ResourceConfig.from_raw_config(self._raw_config.production)
        production_my_stage = MyStage(self, 'production-my-stage', production_config)
        production_stage = pipeline.add_application_stage(production_my_stage)