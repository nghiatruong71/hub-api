export enum StaticProxyType {
    Viettel = 1,
    Fpt = 2,
    Vnpt = 3,
    US = 4,
}

export const StaticProxyTypeMapping: Record<string, string> = {
    "83f2deb8-f585-4bec-bc44-c0e50cffaa1c": "Viettel",
    "8e4dc6e3-cc44-4118-833d-13be1252d8bd": "FPT",
    "942b8db4-5600-48b1-adb2-87b77ce68a91": "VNPT"
};

export const RotatingProxyTypeMapping: Record<string, string> = {
    "34e177eb-becc-47a4-aaba-7c9a54552411": "CHANGE_PROXY_1_DAY",
    "15f60b3d-6b52-45bd-8756-69ab56907379": "CHANGE_PROXY_1_DAY",
    "4a1d65a0-1bf3-4044-afda-75c715ff8022": "CHANGE_PROXY_1_WEEK",
    "8b4bf9d4-38e7-420f-8e58-703691e36e2d": "CHANGE_PROXY_VIP_1_DAY",
    "34823d9d-3732-48ed-82db-4c8fd6902f23": "CHANGE_PROXY_VIP_1_DAY",
    "af32e02a-594f-4681-8400-9603c84688da": "CHANGE_PROXY_VIP_1_WEEK",
};
