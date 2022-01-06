import * as $ from 'JQuery'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var cbpHorizontalMenu = (function () {
      var b = $("#cbp-hrmenu > ul > li"),
        g = b.children("a"),
        c = $("body"),
        d = -1;
      function f() {
        g.on("click", a);
        b.on("click", function (h:Event) {
          h.stopPropagation();
        });
      }
      function a(j:Event) {
        if (d !== -1) {
          b.eq(d).removeClass("cbp-hropen");
        }
        var i = $(j.currentTarget).parent("li"),
          h = i.index();
        if (d === h) {
          i.removeClass("cbp-hropen");
          d = -1;
        } else {
          i.addClass("cbp-hropen");
          d = h;
          c.off("click").on("click", e);
        }
        return false;
      }
      function e() {
        b.eq(d).removeClass("cbp-hropen");
        d = -1;
      }
      return { init: f };
    })();

    $(function () {
      cbpHorizontalMenu.init();
    });

  }

}
