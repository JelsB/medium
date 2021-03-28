from pathlib import Path
from aws_cdk import core
from my_pipeline.configuration import RawConfig, AppConfig
from my_pipeline.pipeline_stack import PipelineStack

# Read config file
config_file = Path('config.json')
# Process raw config file
raw_config = RawConfig(config_file)
# Create application config instance
app_config = AppConfig.from_raw_config(raw_config.application)


# Create pipeline stack instance
app = core.App()
PipelineStack(app, f'{app_config.application_name}-{app_config.branch}',
              env=app_config.build_environment,
              raw_config=raw_config,
              app_config=app_config)

app.synth()
