const loadAllItems = require('./loadAllItems.js');

module.exports = function main() {
    obj=loadAllItems();
    var stuff=new Array();
    var num=new Array(100);
    var index=new Array();
    for (var i=0;i<100;i++)
        num[i]=0;
    for (i=0;i<obj.length;i++)
    {
        for (var j=0;j<stuff.length;j++)
        {
            if (stuff[j].barcode==obj[i].barcode)
                break;
        }
        stuff[j]=obj[i].barcode;
        num[j]++;
        index[j]=i;
    }
    var total=0;
    var single;
    var ret="***<没钱赚商店>购物清单***\n";
    for (i=0;i<stuff.length;i++)
    {
        single=obj[index[i]].price*num[i];
        total+=single;
        ret+="名称："+obj[index[i]].name+"，数量："+num[i]+obj[index[i]].unit+"，单价："+obj[index[i]].price+"(元)，小计："+single+"(元)\n";
    }
    ret+="----------------------\n总计："+total+"(元)\n"+"**********************\n";
    return ret;
};
