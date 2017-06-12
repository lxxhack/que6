const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    items=loadAllItems();
    var stuff=new Array();
    var num=new Array(items.length);
    var index=new Array();
    for (var i=0;i<items.length;i++)
        num[i]=0;
    for (i=0;i<inputs.length;i++)
    {
        for (var j=0;j<stuff.length;j++)
        {
            if (inputs[i]==stuff[j].barcode)
                break;
        }
        stuff[j]=inputs[i];
        num[j]++;
        for (var i=0;i<items.length;i++)
        {
            if (stuff[j]==items[i])
                index[j]=i;
        }
    }
    var total=0;
    var single;
    var ret="***<没钱赚商店>购物清单***\n";
    for (i=0;i<stuff.length;i++)
    {
        single=items[index[i]].price*num[i];
        total+=single;
        ret+="名称："+items[index[i]].name+"，数量："+num[i]+items[index[i]].unit+"，单价："+items[index[i]].price+"(元)，小计："+single+"(元)\n";
    }
    ret+="----------------------\n总计："+total+"(元)\n"+"**********************\n";
    return ret;
};
