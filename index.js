
        function redactText() {
            var inputText = document.getElementById('inputText').value;
            var wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');

            for (var i = 0; i < wordsToRedact.length; i++) {
                var redactRegex = new RegExp(wordsToRedact[i], 'gi');
                inputText = inputText.replace(redactRegex, '****');
            }

            var output = document.getElementById('output');
            output.textContent = inputText;
        }