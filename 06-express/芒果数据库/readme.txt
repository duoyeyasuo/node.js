MongoDB: 芒果数据库

什么是数据库？
    问：可以保存数据的就是数据库？ 不一定是数据
    答：数据库不只能保存数据，它还提供了操作数据的api。

数据库分类：
    关系型数据库： 就是表  数据以表的形式进行存储
        MySQL  *** 后端使用最多的就是mysql数据库  
        ORACLE
        SQL Server
        DB2 
        ... 
    NoSQL数据库（非关系型数据库）: 
        MongoDB  学习MongoDB  非常简单  数据是以JSON的形式进行存储
        redis
        ....

安装数据库：
    1）下载mongoDB数据库   https://www.mongodb.com/
    2）安装  安装时先建一个安装目录  如在C盘中建一个mongo的目录  
    3）把mongo安装到上面的文件夹中
    4）在上面的目录中 创建一个data的目录 用来保存数据库中的数据
    5）进入到bin目录中，启动mongodb服务器（数据库服务器）
        mongod --dbpath=c:/mongo/data   开机  
        看到下面信息，表示OK：
        waiting for connections on port 27017
    6）使用CMS窗口去连接数据库

安装注意细节：
    1）不要有中文路径 
    2） mongod --dbpath=c:/mongo/data   --之前有空格，其它任何地方不要加空格 
    3） 如果是32位操作系统  开机命令：
        mongod --dbpath=c:/mongo/data --journal --storageEngine=mmapv1
    4）不要使用powershell  使用cmd窗口

以更优雅的方式开机（上面的开机方式不太优雅）：
    1）使用批处理命令
        在桌面上创建一个.bat文件   
        将开机命令写在这个文件中
        什么时候想开机只需要双击这个文件就OK

    2）注册成window服务 
        以管理员的身份，输入：
        mongod --dbpath=c:/mongo/data --logpath=c:/mongo/mongo.log --install

        如果电脑配置高，可以让mongodb一直处理开机状态。
        如果配置不高，可以在使用的时候在window服务中开机。

        如何找到window服务：
            此电脑 ---> 右键 ---> 管理

在任何一个目录下面，都可以通过mongo命令连接服务器：
    把bin目录配置到环境变量 

    C:\mongo\bin  把这个目录配置到计算机的环境变量中就OK了

    






























