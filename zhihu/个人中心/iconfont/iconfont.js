;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-camera" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M774.4 288 384 288C384 268.8 371.2 256 352 256l-64 0C268.8 256 256 268.8 256 288L249.6 288c-51.2 0-89.6 38.4-89.6 89.6l0 332.8c0 51.2 38.4 89.6 89.6 89.6l524.8 0c51.2 0 89.6-38.4 89.6-89.6L864 377.6C864 326.4 825.6 288 774.4 288zM800 710.4c0 12.8-12.8 25.6-25.6 25.6L249.6 736c-12.8 0-25.6-12.8-25.6-25.6L224 377.6c0-12.8 12.8-25.6 25.6-25.6l524.8 0c12.8 0 25.6 12.8 25.6 25.6L800 710.4z"  ></path>' +
    '' +
    '<path d="M512 384C422.4 384 352 454.4 352 544S422.4 704 512 704s160-70.4 160-160S601.6 384 512 384zM512 640c-51.2 0-96-44.8-96-96S460.8 448 512 448s96 44.8 96 96S563.2 640 512 640z"  ></path>' +
    '' +
    '<path d="M736 416m-32 0a0.5 0.5 0 1 0 64 0 0.5 0.5 0 1 0-64 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-remindfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M844.8 742.4l-57.6-115.2L787.2 448c0-115.2-76.8-224-185.6-262.4C595.2 147.2 556.8 115.2 512 115.2S428.8 147.2 422.4 192C313.6 230.4 236.8 332.8 236.8 448l0 179.2-57.6 115.2c-6.4 6.4-6.4 19.2 0 32 6.4 6.4 12.8 12.8 25.6 12.8l614.4 0c12.8 0 19.2-6.4 25.6-12.8C851.2 768 851.2 755.2 844.8 742.4z"  ></path>' +
    '' +
    '<path d="M422.4 819.2c0 51.2 38.4 89.6 89.6 89.6 51.2 0 89.6-38.4 89.6-89.6L422.4 819.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M416 192C537.6 192 640 294.4 640 416S537.6 640 416 640 192 537.6 192 416 294.4 192 416 192M416 128C256 128 128 256 128 416S256 704 416 704 704 576 704 416 576 128 416 128L416 128z"  ></path>' +
    '' +
    '<path d="M832 864c-6.4 0-19.2 0-25.6-6.4l-192-192c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l192 192c12.8 12.8 12.8 32 0 44.8C851.2 864 838.4 864 832 864z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhiliaoxuanzhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M247.83562 788.845203c2.590178 1.418869 5.424847 2.102218 8.278953 2.102218 3.366617 0 6.706637-0.977966 9.630306-2.898094l48.02161-31.732747c0.797922-0.509443 1.528328-1.124252 2.238274-1.746222l55.175289-36.731013c27.300188 5.223321 54.465343 7.861578 80.814162 7.861578 207.524188 0 376.374729-146.838122 376.374729-327.376176C828.36792 217.789762 659.501011 70.88617 451.995237 70.88617 244.44752 70.88617 75.623576 217.789762 75.623576 398.323724c0 108.243245 60.755628 208.343592 163.089135 269.672088l0 105.523149C238.6677 779.918705 242.18981 785.792639 247.83562 788.845203L247.83562 788.845203zM872.605538 461.580531l-28.073558 20.743928c24.554517 33.280511 37.501315 71.757746 37.501315 111.239544 0 70.340923-41.245411 135.65596-110.392519 174.670258-5.448376 3.096551-8.830338 8.8999-8.830338 15.18814l0 52.073622-6.002829-3.986541c-0.553431-0.484891-1.218366-0.976943-1.842382-1.418869l-46.469754-30.954262c-3.900611-2.585063-8.70042-3.537455-13.266989-2.542098-81.670394 17.072464-160.762885-1.548787-219.700683-45.769015l-20.920903 27.94364c65.095097 48.779636 151.68601 69.98595 240.534633 53.423952l38.417902 25.617391c0.597419 0.510466 1.262354 1.045483 1.945702 1.461834l35.113686 23.230785c2.906278 1.901714 6.287217 2.897071 9.652811 2.897071 2.836715 0 5.673431-0.683349 8.242126-2.102218 5.665247-3.035173 9.185311-8.925475 9.185311-15.368184l0-74.500348c74.879872-45.898933 119.275029-119.896999 119.275029-199.907101C916.948523 546.532635 901.631489 500.901722 872.605538 461.580531L872.605538 461.580531z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)