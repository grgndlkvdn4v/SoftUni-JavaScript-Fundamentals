(numbers) => numbers.filter( (el, i) => i % 2 == 1 ) 
                    .map(x => x * 2)
                    .reverse()
                    .join(" ")
