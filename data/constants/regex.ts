export const usernameRegex: RegExp = /^[A-Za-z0-9_-]{4,15}$/;

export const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

export const passphraseRegex: RegExp = /^\s*([a-z]{3,11}\s*){12}$/g;

// * UserAgent regex
export const windowsRegex: RegExp = /\((?<os_version>[^;]+)[^\)]+\)[^\)]+\)\s+(?<software_name>[^\/]+)\/(?<software_version>[^ ]+)/gm;

export const androidRegex: RegExp = /\(\w+;\s+(?<os>\w+)\s+(?<os_version>\w+);.*SamsungBrowser\s+\/\s+\d+\.\d+\s+(?<software>[^\/]+)\/(?<software_version>[^ ]+)/gm;

export const iOSRegex: RegExp = /iPhone\s+(?<os>\w+)\s+(?<os_version>\w+).*Version\/(?<software_version>[^ ]+)\s+\w+\/\w+\s+(?<software_name>\w+)\/\d+\.\d+$/gm;
