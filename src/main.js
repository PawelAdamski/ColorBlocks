
algorithms = [
    { name: "Bubble sort", operation:"swap", sort: bubbleSort},
    { name: "Insert sort", operation:"swap", sort: insertSort},
    { name: "QuickSort", operation:"swap", sort: quickSort},
    { name: "Merge sort", operation:"set", sort: mergeSort},
    { name: "Heap sort", operation:"swap", sort: heapSort},
    { name: "Shell sort", operation:"set", sort: shellSort}
]

function getAlgorithm(name) {
    for (var i = 0; i < algorithms.length; i++) {
        if (algorithms[i].name===name) {
            return algorithms[i];
        }
    }
}

app = {
    players: [],

    start: function() {
        this.players.forEach(function(p){p.play()})
    },

    stop: function() {
        this.players.forEach(function(p){p.stop()})
    },

    changeSpeed: function(v) {
        this.players.forEach(function(p){p.setSpeed(v)})
    },

    clean: function() {
        this.players.forEach(function(p){p.clean()})
    },

    record: function(tab, selectedAlgorithms) {
        var inputs = []
        for (var i=0; i<selectedAlgorithms.length;i++) {
            var input = new array(tab);
            input.startRecording();
            algorithms[i].sort(input);
            input.finishRecording();

            inputs.push(input)
        }

        var players = []
        for (var i=0; i<selectedAlgorithms.length;i++) {
            var a = new VisualHistogram("#svg-"+i,"3%" , "3%");
            a.init(tab, selectedAlgorithms[i].name);
            p = new player(inputs[i].log, a, selectedAlgorithms[i].operation);

            players.push(p);
        }
        return players;
    },


    startNew: function(n,dataOrder, selectedAlgorithms) {
        this.clean();
        var tab = arrayGeneration[dataOrder](n);
        this.players = this.record(tab, selectedAlgorithms);
        this.start();
    }
}