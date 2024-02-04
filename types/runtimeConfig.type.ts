

// types/runtimeConfig.type.ts

// Define a type for the public configuration, including all expected public runtime config properties
export type RuntimeConfig = {
  public:{
    gtmId?: string,
    site: {
      url?: string,
      domain?: string;
    },
    xUrl?: string; 
    youTubeUrl?: string; 
    name?: string;
  };
  };
 
  


