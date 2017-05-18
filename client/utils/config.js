import lan from './lan';
import index1 from './index1';
import index2 from './index2';
import index3 from './index3';
import index4 from './index4';
import index5 from './index5';
import index6 from './index6';
import index7 from './index7';
import index8 from './index8';
import index9 from './index9';

const config = {
    logType: {
        index1: lan["USB插拔日志"],
        index2: lan['USB文件操作日志'],
        index3: lan['客户端上下线日志'],
        index4: lan['管理员操作日志'],
        index5: lan['打印日志'],
        index6: lan['申请日志'],
        index7: lan['客户端系统日志'],
        index8: lan['客户端锁屏解锁日志'],
        index9: lan['本地文件操作日志']
    },
    index1,
    index2,
    index3,
    index4,
    index5,
    index6,
    index7,
    index8,
    index9
};

[
    index1,
    index2,
    index3,
    index4,
    index5,
    index6,
    index7,
    index8,
    index9
].forEach(function(index) {
    index.forEach(function(item) {
        //渲染类型
        if (!item.type) {
            item.type = "input";
        }
        //匹配类型
        if (!item.exactMatch) {
            item.exactMatch = false;
        }
        //是否作为检索条件
        if (!item.isSelected) {
            item.isSelected = true;
        }
    });
});
export default config;