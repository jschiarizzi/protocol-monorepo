export interface NetworkConfig {
    nativeTokenSymbol?: string,
    resolverAddress?: string
}

export function getConfig(chainId: number): NetworkConfig;
