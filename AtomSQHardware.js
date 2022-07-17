"use strict";
const ATOMSQ_STOP = 0x55;
const ATOMSQ_PLAY = 0x56;
const ATOMSQ_RECORD = 0x57;
const ATOMSQ_METRONOME = 0x59;
class ATOMSQHardware {
    // private noteInput: API.NoteInput;
    constructor(host, outPort, inPort) {
        this.host = host;
        this.outPort = outPort;
        this.inPort = inPort;
        inPort.setMidiCallback(this.onMidi.bind(this));
        inPort.setSysexCallback(this.onSysex0.bind(this));
        this.transport = host.createTransport();
        this.application = host.createApplication();
        // this.noteInput = host.getMidiInPort(0).createNoteInput(
        //     "Atom SQ", "80????", "90????", "B001??", "B040??", "D0????", "E0????", "A?????"
        // );
    }
    onSysex0(data) {
        println(data);
    }
    onMidi(status, data1, data2) {
        printMidi(status, data1, data2);
        if (isChannelController(status) && data2 == 127) {
            const channel = MIDIChannel(status);
            if (channel == 0) {
                switch (data1) {
                    case ATOMSQ_STOP:
                        // println("STOP");
                        this.transport.stop();
                        break;
                    case ATOMSQ_PLAY:
                        // println("PLAY");
                        this.transport.play();
                        break;
                    case ATOMSQ_RECORD:
                        println("RECORD");
                        this.transport.record();
                        break;
                    case ATOMSQ_METRONOME:
                        println("METRONOME");
                        this.transport.isMetronomeEnabled().toggle();
                        break;
                }
                return;
            }
            if (channel == 1) {
                switch (data1) {
                    case ATOMSQ_STOP:
                        //println("UNDO");
                        this.application.undo();
                        //this.transport.stop();
                        break;
                    case ATOMSQ_PLAY:
                        //println("LOOP");
                        this.transport.isArrangerLoopEnabled().toggle();
                        //this.transport.play()
                        break;
                    case ATOMSQ_RECORD:
                        println("SAVE");
                        //this.application.
                        //this.transport.record();
                        break;
                    case ATOMSQ_METRONOME:
                        println("COUNTIN");
                        //this.transport.isMetronomeEnabled().toggle();
                        break;
                }
                return;
            }
            // println("No");
            // printMidi(status, data1, data2);
        }
    }
}
class TrackHandler {
}
