        console.log("dsadas")
        var 	menuTop = document.getElementById( 'top-menu' ),
        showTop = document.getElementById( 'showTop' ),
        body = document.body;
        console.log("menuTop")

        showTop.onclick = function() {
        console.log("onclick")
        classie.toggle( this, 'active' );
        classie.toggle( menuTop, 'top-slide-menu-open' );
        disableOther( 'showTop' );
        };
        function disableOther( button ) {

        if( button !== 'showTop' ) {
        classie.toggle( showTop, 'disabled' );
        }				
        }

