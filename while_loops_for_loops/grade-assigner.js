for (let score = 60; score < 100; score++) {
    
    function assignGrade(score) {
        if (score > 90) {
            return "A";
        } else if (score > 80) {
            return "B";
        } else if (score > 70) {
            return "C";
        } else if (score > 65) {
            return "D";
        } else {
            return "E";
        }
    }
    console.log("For scoring " + score + " points, you get an " )
}
