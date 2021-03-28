class MyStack(core.Stack):
    """Example stack."""

    def __init__(self, scope: Construct, id: str, config: Config, **kwargs: Any):
        super().__init__(scope, id, env=config.environment, **kwargs)

        # create resources
