class Subway {
  constructor(start, end) {
      this.start = start;
      this.end = end;
      this.line = [
          '신도림', '성수', '신설동', '용두', '신답', '용답', '시청', '을지로입구', 
          '을지로3가', '을지로4가', '동대문역사문화공원', '신당', '상왕십리', 
          '한양대', '뚝섬', '성수', '건대입구', '구의', '강변', '잠실나루', 
          '잠실', '잠실새내', '종합운동장', '삼성', '선릉', '역삼', '강남', 
          '교대', '서초', '방배', '사당', '낙성대', '서울대입구', '봉천', 
          '신림', '신대방', '구로디지털단지', '대림', '문래', '영등포구청', 
          '당산', '합정', '홍대입구', '신촌', '이대', '아현', '충정로'
      ];
  }

  *[Symbol.iterator]() {
      const startIndex = this.line.indexOf(this.start);
      const endIndex = this.line.indexOf(this.end);

      for (let i = startIndex; i <= endIndex; i++) {
          yield this.line[i];
      }
  }
}

class ArrayList {
    constructor(array = []) {
        this.list = ArrayList.arrayToList(array);
    }

    static arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list = { value: array[i], rest: list };
        }
        return list;
    }

    static listToArray(list) {
        const array = [];
        while (list) {
            array.push(list.value);
            list = list.rest;
        }
        return array;
    }

    add(value, index = null) {
        if (index === null || index >= this.size()) {
            this.list = { value, rest: this.list };
        } else {
            let node = this.list;
            let i = 0;
            while (i < index - 1 && node.rest) {
                node = node.rest;
                i++;
            }
            node.rest = { value, rest: node.rest };
        }
    }

    remove(index) {
        if (index === 0) {
            this.list = this.list.rest;
        } else {
            let node = this.list;
            let i = 0;
            while (i < index - 1 && node.rest) {
                node = node.rest;
                i++;
            }
            if (node.rest) {
                node.rest = node.rest.rest;
            }
        }
    }

    get(index) {
        let node = this.list;
        let i = 0;
        while (i < index && node) {
            node = node.rest;
            i++;
        }
        return node ? node.value : undefined;
    }

    set(index, value) {
        let node = this.list;
        let i = 0;
        while (i < index && node) {
            node = node.rest;
            i++;
        }
        if (node) {
            node.value = value;
        }
    }

    size() {
        let node = this.list;
        let count = 0;
        while (node) {
            count++;
            node = node.rest;
        }
        return count;
    }

    indexOf(value) {
        let node = this.list;
        let index = 0;
        while (node) {
            if (node.value === value) return index;
            node = node.rest;
            index++;
        }
        return -1;
    }

    contains(value) {
        return this.indexOf(value) !== -1;
    }

    isEmpty() {
        return this.list === null;
    }

    peek() {
        return this.list ? this.list.value : undefined;
    }

    toArray() {
        return ArrayList.listToArray(this.list);
    }

    clear() {
        this.list = null;
    }

    *iterator() {
        let node = this.list;
        while (node) {
            yield node.value;
            node = node.rest;
        }
    }
}