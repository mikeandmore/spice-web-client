wdi.keyShortcutsHandled = {
    CTRLV: 0
}

wdi.Keymap = {
    keymap: {},
    // ctrlKeymap: {},
    // charmap: {},
    // ctrlPressed: false,

    twoBytesScanCodes: [0x5B, 0xDB, /*0x38, 0xB8,*/ 0x5C, 0xDC, 0x1D, 0x9D, 0x5D, 0xDD, 0x52, 0xD2, 0x53, 0xD3, 0x4B, 0xCB, 0x47, 0xC9, 0x4F, 0xCF, 0x48, 0xC8, 0x50, 0xD0, 0x49, 0xC9, 0x51, 0xD1, 0x4D, 0xCD, 0x1C, 0x9C],

    loadKeyMap: function(layout) {
        try {
            this.keymap = wdi['Keymap' + layout.toUpperCase()].getKeymap();
            // this.ctrlKeymap = wdi['Keymap' + layout.toUpperCase()].getCtrlKeymap();
            // this.reservedCtrlKeymap =  wdi['Keymap' + layout.toUpperCase()].getReservedCtrlKeymap();
            // this.charmap = wdi['Keymap' + layout.toUpperCase()].getCharmap();
        } catch(e) {
	    this.keymap = wdi.KeymapUS.getKeymap();
            // this.ctrlKeymap = wdi.KeymapES.getCtrlKeymap();
            // this.reservedCtrlKeymap =  wdi.KeymapES.getReservedCtrlKeymap();
            // this.charmap = wdi.KeymapES.getCharmap();
	}
    },

    /**
     * Returns the associated spice key code from the given browser keyboard event
     * @param e
     * @returns {*}
     */
    getScanCodes: function(e) {
	var scancode = this.keymap[e.keyCode];
	if (scancode === undefined) {
	    alert('unexpected keyCode ' + e.keyCode + ' ' + e.key);
	    return [];
	}
	if (e.type == 'keyup') {
	    scancode |= 0x80;
	}
	return [this.makeKeymap(scancode)];
    },

    makeKeymap: function(scancode) {
        if ($.inArray(scancode, this.twoBytesScanCodes) != -1) {
            return [0xE0, scancode, 0, 0];
        } else {
            return [scancode, 0, 0];
        }
    }
}
