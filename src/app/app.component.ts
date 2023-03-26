import { Component } from "@angular/core";

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

// ページング機能
@Component({
  selector: "my-app",
  template: `
    <table class="table">
      <tr>
        <th>ISBNコード</th>
        <th>書籍名</th>
        <th>価格</th>
        <th>出版社</th>
      </tr>
      <tr *ngFor="let b of books | slice: start: start+len">
        <td>{{ b.isbn }}</td>
        <td>{{ b.title }}</td>
        <td>{{ b.price }}円</td>
        <td>{{ b.publisher }}</td>
      </tr>
    </table>
    <!-- ページング機能 -->
    <ul class='pagination'>
      <li><a href="#" (click)="pager(0)">1</a></li>
      <li><a href="#" (click)="pager(1)">2</a></li>
      <li><a href="#" (click)="pager(2)">3</a></li>
    </ul>
  `,
})
export class AppComponent {
  start = 0; // 開始位置
  len = 3; // 表示件数

  // 書籍
  books = [
    {
      isbn: "978-4-7741-8411-1",
      title: "独習C# 新版",
      price: 3800,
      publisher: "翔泳社",
    },
    {
      isbn: "978-4-7980-4803-2",
      title: "独習PHP 新版",
      price: 3200,
      publisher: "翔泳社",
    },
    {
      isbn: "978-4-7981-5757-5",
      title: "独習Java 新版",
      price: 4200,
      publisher: "翔泳社",
    },
    {
      isbn: "978-4-7981-5757-6",
      title: "独習Java 新版",
      price: 4200,
      publisher: "翔泳社",
    },
    {
      isbn: "978-4-7981-5757-7",
      title: "独習Java 新版",
      price: 4200,
      publisher: "翔泳社",
    },
    { isbn: "978-4-7981-5757-8", title: "独習Java 新版", price: 4200, publisher: "翔泳社" },
  ];

  // ページング機能
  pager(page: number) {
    this.start = page * this.len;
  }
}
// 複数要素の更新によるオーバーヘッド抑制
// @Component({
//   selector: "my-app",
//   template: `
//     <ul>
//       <!-- trackByで設定された関数で返した値が識別値を示す 引数としてIndex値と値を受け取る -->
//       <li *ngFor="let b of books; trackBy: trackFn">
//         {{ b.title }} ({{ b.isbn }})
//       </li>
//     </ul>
//     <input type="button" (click) = "onclick()" value="更新" />
//   `,
// })
// export class AppComponent {
//   // 書籍
//   books = [
//     {
//       isbn: "978-4-7741-8411-1",
//       title: "独習C# 新版",
//     },
//     {
//       isbn: "978-4-7980-4803-2",
//       title: "独習PHP 新版",
//     },
//     {
//       isbn: "978-4-7981-5757-5",
//       title: "独習Java 新版",
//     },
//   ];

//   trackFn(index: any, item: any) {
//     return item.isbn;
//   }

//   onclick() {
//     this.books = [
//       {
//         isbn: "978-4-7741-8411-1",
//         title: "独習C# 新版",
//       },
//       {
//         isbn: "978-4-7980-4803-2",
//         title: "独習PHP 2版",
//       },
//       {
//         isbn: "978-4-7981-5757-5",
//         title: "独習Java 2版",
//       },
//     ]
//   }
// }
// 複数要素セットを繰り返し処理
// @Component({
//   selector: "my-app",
//   template: `
//     <ng-container *ngFor="let article of articles">
//       <header>{{ article.title }}</header>
//       <div>{{ article.body }}</div>
//       <footer ng-repeat-end >{{ article.author }}</footer>
//     </ng-container>
//   `,
// })
// export class AppComponent {
//   articles = [
//     {
//       title: "タイトル1",
//       body: "本文1",
//       author: '著者1'
//     },
//     {
//       title: "タイトル2",
//       body: "本文2",
//       author: '著者2'
//     },
//     {
//       title: "タイトル3",
//       body: "本文3",
//       author: '著者3'
//     }
//   ]
// }
// 配列の特殊変数利用
// @Component({
//   selector: "my-app",
//   template: `
//     <table class="table">
//       <tr>
//         <th>値</th>
//         <th>index</th>
//         <th>first</th>
//         <th>last</th>
//         <th>odd</th>
//         <th>even</th>
//       </tr>
//       <!-- ここでfor文を使う -->
//       <tr *ngFor="let obj of data; index as i; first as first; last as last; odd as odd; even as even;">
//         <td>{{ obj }}</td>
//         <td>{{ i }}</td>
//         <td>{{ first ? '○' : '-'}}</td>
//         <td>{{ last ? '○' : '-'}}</td>
//         <td>{{ odd ? '○' : '-'}}</td>
//         <td>{{ even ? '○' : '-'}}</td>
//       </tr>
//     </table>
//   `,
// })
// export class AppComponent {
//   data = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
// }
// For文
// @Component({
//   selector: "my-app",
//   template: `
//     <table class="table">
//       <tr>
//         <th>ISBNコード</th>
//         <th>書籍名</th>
//         <th>価格</th>
//         <th>出版社</th>
//       </tr>
//       <!-- ここでfor文を使う -->
//       <!-- 書籍情報booksを順に取り出し、テーブル列に整形 -->
//       <tr *ngFor="let book of books">
//         <td>{{ book.isbn }}</td>
//         <td>{{ book.title }}</td>
//         <td>{{ book.price }}円</td>
//         <td>{{ book.publisher }}</td>
//       </tr>
//     </table>
//   `,
// })
// export class AppComponent {
//   // 書籍情報を準備
//   books = [
//     {
//       isbn: "978-4-7741-8411-1",
//       title: "独習C# 新版",
//       price: 3800,
//       publisher: "翔泳社",
//     },
//     {
//       isbn: "978-4-7980-4803-2",
//       title: "独習PHP 新版",
//       price: 3200,
//       publisher: "翔泳社",
//     },
//     {
//       isbn: "978-4-7981-5757-5",
//       title: "独習Java 新版",
//       price: 4200,
//       publisher: "翔泳社",
//     },
//   ]
// }
// @Component({
//   selector: "my-app",
//   template: `
//     <form>
//       <!-- ここで選択した値がseasonに入る -->
//       <select name="season" [(ngModel)]="season">
//       <option value="">四季を選択</option>
//       <option value="spring">春</option>
//       <option value="summer">夏</option>
//       <option value="autumn">秋</option>
//       <option value="winter">冬</option>
//       </select>
//     </form>
//     <!-- ここでseasonの値に応じて表示を切り替える -->
//     <div [ngSwitch]="season">
//       <span *ngSwitchCase="'spring'">春は桜が咲きます。</span>
//       <span *ngSwitchCase="'summer'">夏は海に行きます。</span>
//       <span *ngSwitchCase="'autumn'">秋は紅葉が綺麗です。</span>
//       <span *ngSwitchCase="'winter'">冬は雪が降ります。</span>
//       <span *ngSwitchDefault>季節を選択してください。</span>
//     </div>
//   `,
// })
// export class AppComponent {
//   season = ''
// }
// const ngif1 = `
// <!-- ngIfの場合は要素が破棄 -->
//   <div *ngIf="show else elseContent">
//     <p>WINGSプロジェクトはプロジェクトは、当初当初、ライター...</p>
//   </div>
//   <!-- styleの操作であれば要素は消さない -->
//   <div [style.display] = "show ? 'inline' : 'none'">
//     <p>WINGSプロジェクトはプロジェクトは、当初当初、ライター...</p>
//   </div>
//   <ng-template #elseContent>
//     <h3 style="color:Red">非表示中です。</h3>
//   </ng-template>
// `
// const ngif2 = `
// <!-- 全てをtemplate化 -->
//   <div *ngIf="show; then trueContent; else elseContent">
//     この部分は無視される
//   </div>
//   <ng-template #trueContent>
//     <p>全ての表示をテンプレ</p>
//   </ng-template>
//   <ng-template #elseContent>
//     <h3 style="color:Red">非表示中です。</h3>
//   </ng-template>
// `

// @Component({
//   selector: "my-app",
//   template: `
//     <form>
//       <label for="show">表示/非表示:</label>
//       <input id="show" name="show" type="checkbox" [(ngModel)]="show" />
//     </form>
//     ${ngif2}
//   `,
// })
// export class AppComponent {
//   show = false;
// }
// 文字列に応じて出力を切り替える
// @Component({
//   selector: "my-app",
//   template: `
//     <li *ngFor="let m of members">
//       {{ m.sex | i18nSelect : messages }}は{{ m.name }}です。
//     </li>
//   `,
// })
// export class AppComponent {
//   members = [
//     { name: "田中", sex: "female" },
//     { name: "吉田", sex: "male" },
//     { name: "石田", sex: "unknown" },
//   ];
//   messages = {
//     male: "彼",
//     female: "彼女",
//     other: "彼/彼女",
//   };
// }
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
