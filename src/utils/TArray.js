class TArray {
  static isEmpty(a) {
    return a == null || a.length === 0;
  }
  static contains(a, value) {
    if (this.isEmpty(a) || this.isEmpty(value)) {
      return false;
    }
    for (let i in a) {
      if (a[i] && a[i].toLowerCase() === value.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
}

export default TArray;
