import React, { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }: any, ref: any) => (
  <div
    ref={ref}
    onScroll={(e: any) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
  >
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>braxton christensen</h1>I am a software engineer with a passion
          for creating beautiful experiences, that delight users.
        </div>
        <div className="links">
          <a href="https://github.com/braxtonchristensen" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/braxtonchristensen/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>focus</h1>I am a software engineer with a passion for creating
          beautiful and usable products.
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>rocket</h1>A rocket (from Italian: rocchetto,
          lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft,
          aircraft or other vehicle use to obtain thrust from a rocket engine.
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>turbine</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek
          τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary
          mechanical device that extracts energy from a fluid flow and converts
          it into useful work.
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>table</h1>A table is an item of furniture with a flat top and one
          or more legs, used as a surface for working at, eating from or on
          which to place things.[1][2]
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a
          small, portable personal computer (PC) with a screen and alphanumeric
          keyboard.
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <div className="dot-inner">
          <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the
          German inventor Count Ferdinand von Zeppelin (German pronunciation:
          [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning
          of the 20th century.
        </div>
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
));

export default Overlay;
