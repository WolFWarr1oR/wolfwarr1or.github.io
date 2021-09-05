import datetime
def parse_expenses(expenses_string= """#2022-01-02 -34.01 USD
                2016-01-02 -34.01 USD
                2016-01-03 2.59 DKK
                2016-01-03 -2.72 EUR"""):
    """Parse the the list of expenses and return the list of triples (date, value, currency).
    Ignore lines starting with #.
    Parse the date using datetime.
    Example expenses_string:
        2016-01-02 -34.01 USD
        2016-01-03 2.59 DKK
        2016-01-03 -2.72 EUR
    """
    expenses = []
    for line in expenses_string.splitLines():
        if line.startswith("#"):
            continue
        date, value, curr = line.split(" ")
        expenses.append((datetime.datetime.strptime(date, "%Y-%m-%d"),
                        float(value),
                        curr))
    return expenses



parse_expenses()