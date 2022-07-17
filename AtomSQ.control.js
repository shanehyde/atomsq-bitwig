"use strict";
loadAPI(17);
load('ATOMSQHardware.js');
// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);
host.defineController("PreSonus", "AtomSQ", "0.1", "a14681a8-a5b8-4be9-b9f7-6219de61f133", "Shane Hyde");
host.defineMidiPorts(1, 1);
//let transport: API.Transport;
let hardware;
if (host.platformIsWindows()) {
    // TODO: Set the correct names of the ports for auto detection on Windows platform here
    // and uncomment this when port names are correct.
    host.addDeviceNameBasedDiscoveryPair(["ATM SQ"], ["MIDIOUT2 (ATM SQ)"]);
}
else if (host.platformIsMac()) {
    // TODO: Set the correct names of the ports for auto detection on Mac OSX platform here
    // and uncomment this when port names are correct.
    //host.addDeviceNameBasedDiscoveryPair(["ATM SQ"], ["MIDIOUT2 (ATM SQ)"]);
}
else if (host.platformIsLinux()) {
    // TODO: Set the correct names of the ports for auto detection on Linux platform here
    // and uncomment this when port names are correct.
    //host.addDeviceNameBasedDiscoveryPair(["ATM SQ"], ["MIDIOUT2 (ATM SQ)"]);
}
function init() {
    hardware = new ATOMSQHardware(host, host.getMidiOutPort(0), host.getMidiInPort(0));
    // host.getMidiInPort(0).setMidiCallback(onMidi0);
    // host.getMidiInPort(0).setSysexCallback(onSysex0);
    // let noteInput = host.getMidiInPort(0).createNoteInput(
    //     "Atom SQ", "80????", "90????", "B001??", "B040??", "D0????", "E0????", "A?????"
    // );
    // transport = host.createTransport();
    // TODO: Perform further initialization here.
    println("AtomSQ initialized!");
}
// // Called when a MIDI sysex message is received on MIDI input port 0.
// function onSysex0(data: string) {
//    // MMC Transport Controls:
//    switch (data) {
//       case "f07f7f0605f7":
//          transport.rewind();
//          break;
//       case "f07f7f0604f7":
//          transport.fastForward();
//          break;
//       case "f07f7f0601f7":
//          transport.stop();
//          break;
//       case "f07f7f0602f7":
//          transport.play();
//          break;
//       case "f07f7f0606f7":
//          transport.record();
//          break;
//    }
// }
function flush() {
    //println("flush called");
    // const port = host.getMidiOutPort(0);
    // port.sendMidi(0x91, 0x26, 0x20 );
    // port.sendMidi(0x92, 0x26, 0x00 );
    // port.sendMidi(0x93, 0x26, 0x70 );
    // TODO: Flush any output to your controller here.
}
function exit() {
}
