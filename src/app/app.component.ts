import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formS: FormGroup;
  public formS7: FormGroup;
  s: any;
  s2: any;
  s7: any;
  s8: any;
  list = [
    { hoten: 'Nguyen Thi Mai', diemthi: 9 },
    { hoten: 'Tran Thi Anh', diemthi: 7.5 },
    { hoten: 'Hoang Thi Dung', diemthi: 8.3 },
  ];
  list2 = [
    { hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi: 9 },
    { hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi: 7.5 },
    { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi: 8.3 },
  ];
  arrchinhphuong = [12, -2, -7, 5, 20, 36, 9, 64];
  sumPo: any;
  result7: any;
  ngOnInit(): void {
    this.formS = new FormGroup({
      x: new FormControl('', [Validators.required]),
      n: new FormControl('', [Validators.required]),
    });
    this.formS7 = new FormGroup({
      a: new FormControl('', [Validators.required]),
      b: new FormControl('', [Validators.required]),
      c: new FormControl('', [Validators.required]),
    });
  }
  tinhs(x, n) {
    if (n === 1) {
      return x;
    } else {
      return this.tinhs(x, n - 1) + Math.pow(x, n);
    }
  }
  tinhs2(x, n) {
    if (n === 1) {
      return -x;
    } else {
      return (
        this.tinhs2(x, n - 1) +
        (Math.pow(-1, n) * Math.pow(x, n)) / this.tinhGiaiThua(n)
      );
    }
  }
  tinhGiaiThua(n) {
    if (n === 1) {
      return n;
    } else {
      return this.tinhGiaiThua(n - 1) * n;
    }
  }
  onTinhS(value: any) {
    this.s = this.tinhs(parseInt(value.x), parseInt(value.n));
  }
  onTinhS2(value: any) {
    this.s2 = this.tinhs2(parseInt(value.x), parseInt(value.n));
    console.log(this.tinhGiaiThua(parseInt(value.n)));
  }
  sapxep() {
    this.list.sort((a, b) => {
      var nameA = a.hoten
        .split(' ')
        [a.hoten.split(' ').length - 1].toUpperCase();

      var nameB = b.hoten
        .split(' ')
        [b.hoten.split(' ').length - 1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
  }
  filterDiemAndAdress() {
    this.list2 = this.list2.filter(
      (item) => item.diemthi > 8 && item.quequan === 'Hai Phong'
    );
  }
  timsochinhphuong() {
    this.arrchinhphuong = this.arrchinhphuong.filter((x) => {
      let sqrt = Math.sqrt(x);
      return Math.pow(sqrt, 2) === x;
    });
  }
  sumPositive() {
    this.sumPo = this.arrchinhphuong.reduce((total, item) => {
      if (item > 0) {
        return total + item;
      } else {
        return total + 0;
      }
    }, 0);
  }
  onTinhS7(value: any) {
    let a = parseInt(value.a);
    let b = parseInt(value.b);
    let c = parseInt(value.c);
    let delta = Math.pow(b, 2) - 4 * a * c;
    let candelta = Math.sqrt(delta);

    if (delta > 0) {
      let x1 = (-b + candelta) / (2 * a);
      let x2 = (-b - candelta) / (2 * a);
      this.result7 = `Phương trình có 4 nghiệm phân biệt là x1=${-Math.sqrt(
        x1
      )}, x2=${Math.sqrt(x1)}, x3=${-Math.sqrt(x2)}, x4=${Math.sqrt(x2)}`;
    } else if (delta === 0) {
      // let x1 = -b / a;
      let x = b / a;
      this.result7 = `Phương trình có 2 nghiệm phân biệt là :x1="${-Math.sqrt(
        x
      )}", x2="${Math.sqrt(x)}`;
    } else if (delta < 0) {
      this.result7 = `Phương trình vô nghiệm`;
    }
  }
  ontinhthetich(value: any) {
    let b = parseInt(value.x);
    let h = parseInt(value.n);
    this.s8 = (b * h) / 3;
  }
}
