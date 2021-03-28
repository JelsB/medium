class MyStage(Stage):
    """Example stage."""

    def __init__(self, scope: Construct, id: str, config: Config, **kwargs: Any):
        super().__init__(scope, id, env=config.environment, **kwargs)

        # Create stack
        ad_hoc_bucket = MyStack(self, 'my-stack', config)
