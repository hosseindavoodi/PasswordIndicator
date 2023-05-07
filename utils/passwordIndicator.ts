export const passwordIndicator = (param: string) => {
    let passwordCheck = 0
    let validateRegex = ['[A-Z]', '[a-z]', '[0-9]', '\\W']
    validateRegex.forEach(regex => {
      if (new RegExp(regex).test(param)) {
        passwordCheck += 1
      }
    })
  
    if (passwordCheck > 2 && param.length > 5) {
      passwordCheck += 1
    }
    if (passwordCheck > 3 && param.length > 4) {
      passwordCheck += 1
    }
    if (passwordCheck > 3 && param.length > 7) {
      passwordCheck += 1
    }
    if (passwordCheck > 4 && param.length > 9) {
      passwordCheck += 1
    }
    if (passwordCheck > 5 && param.length > 11) {
      passwordCheck += 1
    }
  
    return passwordCheck
  }


  export const hasMinCharacters = (param: string) => {
    return param && param.length > 5
  }

  export const hasNumber = (param: string) => {
    return /[0-9]/.test(param)
  }
  
  export const hasUppercaseLetter = (param: string) => {
    return /[A-Z]/.test(param)
  }

  