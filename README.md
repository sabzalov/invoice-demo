SHAMIL NOTES:

-   installed using lts/carbon - (the install returns errors trying to install using node 10.13)
-   Did not use proptypes as they were throwing ESlint errors
-   Used browser form submission and validation for the creation of new items, hence, expecting them to be submitted by pressing the enter key or the done button on mobile. That way state is preserved between sets of changes.

Part 1:
Build an invoice editor in React that allows a user add, edit, or remove line items according to the text-based mockup below. Pricing should be updated on-the-fly as line items are added or edited. Don't worry about persisting invoices. Don't worry about styling.

```
Item                      Qty     Price       Total
--------------------------------------------------------
Widget                   [ 2 ]  [ $10.00 ]  [ $20.00 ] x
Cog                      [ 2 ]  [ $15.99 ]  [ $31.98 ] x
[ New Item ]             [   ]  [        ]  [        ]
                                    --------------------
                                    Subtotal      $51.98
                                    Tax (5%)       $2.60
                                    Total         $54.58
                                    --------------------
```

Part 2:
Incorporate Redux into your application

Part 3:
Write Tests using the test framework of your choice

Part 4:
Make it beautiful and mobile responsive
