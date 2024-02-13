export const windowsRegex: RegExp = /\((?<os_version>[^;]+)[^\)]+\)[^\)]+\)\s+(?<software_name>[^\/]+)\/(?<software_version>[^ ]+)/gm;

export const androidRegex: RegExp = /\(\w+;\s+(?<os>\w+)\s+(?<os_version>\w+);.*SamsungBrowser\s+\/\s+\d+\.\d+\s+(?<software>[^\/]+)\/(?<software_version>[^ ]+)/gm;

export const iOSRegex: RegExp = /iPhone\s+(?<os>\w+)\s+(?<os_version>\w+).*Version\/(?<software_version>[^ ]+)\s+\w+\/\w+\s+(?<software_name>\w+)\/\d+\.\d+$/gm;
