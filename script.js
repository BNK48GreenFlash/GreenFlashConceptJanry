document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tweetButton").addEventListener("click", tweetMessage);
});

function tweetMessage() {
    const message = "Janry GreenFlash\n#JanryBNK48\n#GreenFlashConceptDay1";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}
