# -*- coding: utf-8 -*
import wenxin_api # 可以通过"pip install wenxin-api"命令安装
from wenxin_api.tasks.text_to_image import TextToImage
wenxin_api.ak = "HL2IUa0gDfGKSAHAG6O2GGG2G3WbEMCv"
wenxin_api.sk = "4QOKIOm5G9CICZ5udFiLHmpacLosV2GG"
input_dict = {
    "text": "极乐迪斯科，猫，死亡",
    "style": "赛博朋克",
    "resolution": "1024*1024"
}
rst = TextToImage.create(**input_dict)
print(rst)