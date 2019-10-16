export function flattenObject(obj: object, sep: string = '_', key: string = null) {
  const result: object = {};
  for (let [k, v] of Object.entries(obj)) {
    k = key === null ? k : `${key}${sep}${k}`;
    if (v instanceof Object && v !instanceof File && v !instanceof FileList) {
      console.log(v);
      Object.assign(result, flattenObject(v, sep, k));
    } else {
      result[k] = v;
    }
  }
  return result;
}


export function makeFormData(obj: Object) {
  console.log(obj);
  
  obj = flattenObject(obj);
  console.log(obj);
  const formData = new FormData();
  for (let [key, value] of Object.entries(obj)) {
    if (value instanceof FileList) {
      for (let i = 0; i < value.length; i++) {
        formData.append(key, value[i]);
      }
    } else {
      formData.append(key, value);
    }
  };
  return formData;
}
