# verbose and hard coded
def create_phone_number(n):
    f = "".join(str(x) for x in n[:3])
    s = "".join(str(x) for x in n[3:6])
    l = "".join(str(x) for x in n[6:])

    return f"({f}) {s}-{l}"

create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])