class RawConfig:
    """
    Raw JSON configuration of the application and of all infrastructure resources for
    each environment and.
    """

    def __init__(self, config_file: Path):
        self._all_config: Any = self._read_config(config_file)
        self._environments_config: Any = self._all_config['environments']
        self._default: Any = self._environments_config['default']

        self.development: Any = self._get_config('development')
        self.staging: Any = self._get_config('staging')
        self.production: Any = self._get_config('production')

        self.application: Any = self._all_config['application']

    # Implementation of reading and parsing logic
