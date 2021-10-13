import * as React from 'react';

export declare type SharedData = {
    basic_info: {
        name: string;
        titles: string[];
        social: {
            name: string;
            url: string;
            class: string;
        }[];
        source_code:string;
        image: string;
    };
    skills: {
        icons: {
            name: string;
            class: string;
            level: string;
        }[];
    };
}

// Custom Hook API
export function useSharedData(): SharedData|{} {
    return React.useContext(SharedDataContext);
}

export const SharedDataContext = React.createContext<SharedData|{}>({});

export function SharedDataProvider({
    sharedData = {},
    children,
  }: {
    sharedData?: SharedData|{};
    children: React.ReactNode;
  }) {
      
    function mergeFeatures(a: SharedData|{}, b: SharedData|{}): SharedData|{} {
        return { ...a, ...b };
    }
    const currentData = useSharedData();
    return (
      <SharedDataContext.Provider
        value={mergeFeatures(
            currentData,
            sharedData
        )}
      >
        {children}
      </SharedDataContext.Provider>
    );
}