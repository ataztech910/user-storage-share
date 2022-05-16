const cookieStringToArray = (cookie: string): {key: string, value: string}[]=> {
    const object = cookie.split('; ').reduce((prev: any, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
    }, {})
    return objectToArray(object)
}

const objectToArray = (object: Partial<any>) => {
    if (!object) {
        return []
    }
    const keys = Object.keys(object)
    let result: {key: string, value: string}[] = []
    if (keys.length > 0) {
        keys.forEach((key: string) => {
            result.push({
                key,
                value: object[key]
            })
        })
    }
    return result
}


export { cookieStringToArray, objectToArray }