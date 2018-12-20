while True:
    a = input()
    a=a.replace("吗","")
    a=a.replace("?","!")
    a=a.replace("？","！")
    a=a.replace("我爱","我也爱")
    a = a.replace("我喜欢", "我也喜欢")
    print(a)
