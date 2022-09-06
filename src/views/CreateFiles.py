# 导入创建文件模组
import os

# oFileNames: 需要创建的文件夹名列表
oFileNames = ['Home', 'Category', 'CategoryDetail',
              'Recommentd', 'Login', 'Cart',
              'User', 'Order', 'OrderConfirm', 'OrderDetail',
              'Pay', 'Product', 'Search', 'NotFound']

# 创建文件夹, 并创建 index.vue 文件
for oFileName in oFileNames:
    # 判断文件夹是否存在
    if not os.path.exists(oFileName):
        # 创建文件夹
        os.mkdir(oFileName)
        # 创建 index.vue 文件
        with open(oFileName + '/index.vue', 'w') as f:
            f.write('<template>\n\t<div>\n\t\t' + oFileName + '\n\t</div>\n</template>\n\n<script>\nexport default {\n\tname: "' + oFileName + '"\n}\n</script>\n\n<style lang="scss" scoped>\n\n</style>\n')
            f.close()
    else:
        # 判断 index.vue 文件内容是否为空
        with open(oFileName + '/index.vue', 'r') as f:
            oFileContent = f.read()
            f.close()
        # 判断 index.vue 文件内容是否为空
        if oFileContent == '':
            # 为空则写入内容
            with open(oFileName + '/index.vue', 'w') as f:
                f.write('<template>\n\t<div>\n\t\t' + oFileName + '\n\t</div>\n</template>\n\n<script>\nexport default {\n\tname: "' + oFileName + '"\n}\n</script>\n\n<style lang="scss" scoped>\n\n</style>\n')
                f.close()


