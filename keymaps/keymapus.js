wdi.KeymapUS = function() {

    var keymapUS = [];

    keymapUS[192]		= 0x29; // `

    keymapUS['1'.charCodeAt()]	= 0x2; 
    keymapUS['2'.charCodeAt()]	= 0x3; 
    keymapUS['3'.charCodeAt()]	= 0x4; 
    keymapUS['4'.charCodeAt()]	= 0x5; 
    keymapUS['5'.charCodeAt()]	= 0x6; 
    keymapUS['6'.charCodeAt()]	= 0x7; 
    keymapUS['7'.charCodeAt()]	= 0x8; 
    keymapUS['8'.charCodeAt()]	= 0x9; 
    keymapUS['9'.charCodeAt()]	= 0x0A;
    keymapUS['0'.charCodeAt()]	= 0x0B;
    keymapUS[189]		= 0x0C; // -
    keymapUS[187]		= 0x0D; // =

    keymapUS['Q'.charCodeAt()]	= 0x10;	
    keymapUS['W'.charCodeAt()]	= 0x11;	
    keymapUS['E'.charCodeAt()]	= 0x12;	
    keymapUS['R'.charCodeAt()]	= 0x13;	
    keymapUS['T'.charCodeAt()]	= 0x14;	
    keymapUS['Y'.charCodeAt()]	= 0x15;	
    keymapUS['U'.charCodeAt()]	= 0x16;	
    keymapUS['I'.charCodeAt()]	= 0x17;	
    keymapUS['O'.charCodeAt()]	= 0x18;	
    keymapUS['P'.charCodeAt()]	= 0x19;	
    keymapUS[219]		= 0x1A; // [
    keymapUS[221]		= 0x1B; // ]
    keymapUS[220]		= 0x2B; // \
    
    keymapUS['A'.charCodeAt()]	= 0x1E;	
    keymapUS['S'.charCodeAt()]	= 0x1F;	
    keymapUS['D'.charCodeAt()]	= 0x20;	
    keymapUS['F'.charCodeAt()]	= 0x21;	
    keymapUS['G'.charCodeAt()]	= 0x22;	
    keymapUS['H'.charCodeAt()]	= 0x23;	
    keymapUS['J'.charCodeAt()]	= 0x24;	
    keymapUS['K'.charCodeAt()]	= 0x25;	
    keymapUS['L'.charCodeAt()]	= 0x26;	
    keymapUS[186]		= 0x27; // ;
    keymapUS[222]		= 0x28; // '
    
    keymapUS['Z'.charCodeAt()]	= 0x2C;	
    keymapUS['X'.charCodeAt()]	= 0x2D;	
    keymapUS['C'.charCodeAt()]	= 0x2E;	
    keymapUS['V'.charCodeAt()]	= 0x2F;	
    keymapUS['B'.charCodeAt()]	= 0x30;	
    keymapUS['N'.charCodeAt()]	= 0x31;	
    keymapUS['M'.charCodeAt()]	= 0x32;	
    keymapUS[188]		= 0x33; // ,
    keymapUS[190]		= 0x34; // .
    keymapUS[191]		= 0x35; // /

    keymapUS[' '.charCodeAt()]	= 0x39

    keymapUS[27]                = 0x1; // ESC
    keymapUS[9]                 = 0x0F; // TAB
    //keymapUS[20]              = 0x3A; // // BLOQ.MAY. => see the charmap, all the capital letters and shift chars send a shift in their sequence
    keymapUS[16]                = 0x2A; // LEFT SHIFT and RIGHT SHIFT
    keymapUS[91]                = 0x1D; // LEFT GUI (META, COMMAND) BINDED TO CONTROL
    keymapUS[17]                = 0x1D; // LEFT CONTROL and RIGHT CONTROL
    keymapUS[32]                = 0x39; // SPACE
    keymapUS[8]                 = 0x0E; // BACKSPACE
    keymapUS[13]                = 0x1C; // ENTER

    //keymapUS[0]               = 0x38; // RIGHT ALT (ALT GR)
    //keymapUS[92]              = 0x5C; // RIGHT GUI (WINDOWS)
    keymapUS[18]                = 0x38; // ALT?

    keymapUS[38]                = 0x48; // UP ARROW
    keymapUS[37]                = 0x4B; // LEFT ARROW
    keymapUS[40]                = 0x50; // DOWN ARROW
    keymapUS[39]                = 0x4D; // RIGHT ARROW
    keymapUS[45]                = 0x52; // INSERT
    keymapUS[46]                = 0x53; // DELETE
    keymapUS[36]                = 0x47; // HOME
    keymapUS[35]                = 0x4F; // FIN
    keymapUS[33]                = 0x49; // PAGE UP
    keymapUS[34]                = 0x51; // PAGE UP
    keymapUS[144]               = 0x45; // BLOQ.NUM.
    keymapUS[145]               = 0x46; // SCROLL LOCK
    keymapUS[112]               = 0x3B; // F1
    keymapUS[113]               = 0x3C; // F2
    keymapUS[114]               = 0x3D; // F3
    keymapUS[115]               = 0x3E; // F4
    keymapUS[116]               = 0x3F; // F5
    keymapUS[117]               = 0x40; // F6
    keymapUS[118]               = 0x41; // F7
    keymapUS[119]               = 0x42; // F8
    keymapUS[120]               = 0x43; // F9
    keymapUS[121]               = 0x44; // F10
    keymapUS[122]               = 0x57; // F11
    keymapUS[123]               = 0x58; // F12

    return {
        getKeymap: function() {
            return keymapUS;
        },
	setCtrlKey: function() {
	    console.log('setCtrlKey TODO');
	}
    };
}( );
