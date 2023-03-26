import { Component } from "@angular/core";

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

// 文字列に応じて出力を切り替える
@Component({
  selector: "my-app",
  template: `
    <li *ngFor="let m of members">
      {{ m.sex | i18nSelect : messages }}は{{ m.name }}です。
    </li>
  `,
})
export class AppComponent {
  members = [
    { name: "田中", sex: "female" },
    { name: "吉田", sex: "male" },
    { name: "石田", sex: "unknown" },
  ];
  messages = {
    male: "彼",
    female: "彼女",
    other: "彼/彼女",
  };
}
// 数字によって表示する値を変える i18nPlural
// @Component({
//   selector: "my-app",
//   template: `<div>{{ favs.length | i18nPlural : messages }}</div>`,
// })
// export class AppComponent {
//   favs = ["田中", "石田", "吉田"];
//   messages = {
//     "=0": "「いいね」されていません",
//     "=1": "1人だけ「いいね」といってくれています",
//     other: "#人が「いいね」と言ってくれています",
//   };
// }
// json
// @Component({
//   selector: "my-app",
//   template: `<pre>{{ obj | json }}</pre> `,
// })
// export class AppComponent {
//   obj: any = {
//     name: "とくじとう",
//     family: ["たろう", "はなこ", "たけし"],
//   };
// }
// パイプ
// @Component({
//   selector: "my-app",
//   template: `
//     <p>{{ title }}</p>
//     <p>{{ title | uppercase }}</p>
//     <p>{{ title | lowercase }}</p>
//     <p>{{ title | titlecase }}</p>
//   `,
// })
// export class AppComponent {
//   title = "WINGS project";
// }
// 双方向バインディング
// @Component({
//   selector: "my-app",
//   template: `<form>
//     <label for="name">名前:</label>
//     <input
//       id="name"
//       name="name"
//       type="text"
//       (input)="myName = $event.target.value"
//       [ngModel]="myName"
//       (ngModelChange)="myName = $event"
//     />
//     <div>こんにちは、{{ myName }}さん!!</div>
//   </form>`,
// })
// export class AppComponent {
//   myName = "やまだ";
// }
// イベントバインディング
// @Component({
//   selector: "my-app",
//   // $eventでイベントを取得できる
//   template: `<input type="button" (click)="show($event)" value="現在時刻" />{{
//       msg
//     }}`,
// })
// export class AppComponent {
//   msg = "----";
//   show(e: any) {
//     this.msg = new Date().toLocaleString();
//     console.log(e);
//   }
// }
// 安全プロパティ
// @Component({
//   selector: "my-app",
//   template: `<div>{{ member?.name }}</div>`,
// })
// export class AppComponent {
//   member = {
//     name: "山田太郎",
//     age: 23,
//   };
// }

// プロパティバインディング
// @Component({
//   selector: "my-app",
//   // template: `<img [src]="image" />`,
//   // template: `<img bind-src="image" />`,
//   template: `<img src="{{ image }}" />`,
// })
// export class AppComponent {
//   image = "http://www.wings.msn.to/image/wings.jpg";
// }

// 文字列バインディング
// @Component({
//   selector: "my-app",
//   // スクリプトやタグを文字列としてそのまま表示
//   // template: `<div>{{ msg }}</div>`,
//   // HTMLタグは表示してスクリプトの実行はしない
//   template: `<div [innerHTML]="msg"></div>`,
// })
// export class AppComponent {
//   msg: string = `<script>window.alert("ようこそ");</script><div>サンプル</div>`;
// }

// @Component({
//   selector: "my-app",
//   template: `<div [innerHTML]="safeMsg"></div>`,
// })
// export class AppComponent {
//   safeMsg: SafeHtml;
//   msg: string = `<script>window.alert("ようこそ");</script><div>サンプル</div>`;
//   constructor(private sanitizer: DomSanitizer) {
//     // msgプロパティに信頼済みマーク付与
//     this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
//   }
// }
