// try {
//     const response = await fetch(`https://api.coincap.io/v2/assets/${coinName.toLowerCase()}`);
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//     const data = await response.json();
//     return data.data.priceUsd;
// } catch (error) {
//     console.error(`Error fetching from CoinCap: ${error}`);
//     return null;
// }

// const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName.toLowerCase()}&vs_currencies=usd`);
// const data = await response.json();
// if (data[coinName.toLowerCase()]) {
//     return data[coinName.toLowerCase()].usd;
// }
// else {
//     console.error('Coin not found in API:', coinName);
//     alert('Coin not found. Please check the coin name.');
//     return null;
// }



                    //                     const checkPricePeriodically = (coinName, targetPrice, interval) => {
                    //                         let isCheckHigher = null; // Track whether the first price is higher or lower than the target

                    //                         // Create or find the coin's display container
                    //                         let coinDisplay = document.getElementById(`coin-${coinName}`);
                    //                         if (!coinDisplay) {
                    //                             coinDisplay = document.createElement('div');
                    //                             coinDisplay.id = `coin-${coinName}`;
                    //                             coinDisplay.className = 'coin-display';
                    //                             document.querySelector('.coinlist-container').appendChild(coinDisplay);
                    //                         }

                    //                         return setInterval(async () => {
                    //                             const currentPrice = await fetchCurrentPrice(coinName);
                    //                             if (currentPrice === null) {
                    //                                 return; // Skip the iteration if the price fetch fails
                    //                             }
                    // v 
                    //                             // Ensure that the price is updated in the DOM
                    //                             coinDisplay.innerHTML = `
                    //                                 <p><strong>${coinName}:</strong> Current Price: $${currentPrice}, Target Price: $${targetPrice}</p>
                    //                             `;

                    //                             // On the first iteration, set the `isCheckHigher` flag
                    //                             if (isCheckHigher === null) {
                    //                                 isCheckHigher = currentPrice > targetPrice; // true if currentPrice is initially higher
                    //                             }

                    //                             // Compare current price with the target price based on the `isCheckHigher` state
                    //                             if (isCheckHigher && currentPrice < targetPrice) {
                    //                                 // Price was higher initially, now it's lower
                    //                                 alert(`The price of ${coinName} dropped to $${currentPrice}, which is LOWER than your target price of $${targetPrice}.`);
                    //                                 isCheckHigher = false; // Switch state
                    //                             } else if (!isCheckHigher && currentPrice > targetPrice) {
                    //                                 // Price was lower initially, now it's higher
                    //                                 alert(`The price of ${coinName} rose to $${currentPrice}, which is HIGHER than your target price of $${targetPrice}.`);
                    //                                 isCheckHigher = true; // Switch state
                    //                             }

                    //                             console.log(`Checked ${coinName}: Current price $${currentPrice}, Target price $${targetPrice}, isCheckHigher: ${isCheckHigher}`);
                    //                         }, interval);
                    //                     };
