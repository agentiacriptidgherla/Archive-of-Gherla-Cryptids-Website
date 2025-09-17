function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
  const root = document.querySelector( "html" );
  const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
}

let logo = document.querySelector( ".logo" );
let navLinks = document.querySelectorAll( ".navbar a" );
let nav = document.querySelector( ".links" );
logo.addEventListener( "click", () => {
    if ( window.innerWidth < 800 ) {
        navLinks.forEach( link => {
            link.classList.toggle( "visible" );
        });
        nav.classList.toggle( "visible" );
       
    }
});
addEventListener( "resize", () => {
    if ( window.innerWidth >= 800 ) {
        navLinks.forEach( link => {
            link.classList.remove( "hidden" );
        });
    }
    else {
        navLinks.forEach( link => {
            link.classList.add( "hidden" );
        });
    }
});