type ThemeSwitchedProperties = {
    theme: string;
};

export type ThemeSwitchedEvent = {
    event: 'theme_switched';
    properties: ThemeSwitchedProperties;
};
