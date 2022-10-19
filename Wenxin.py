# -*- coding: utf-8 -*
import wenxin_api # 可以通过"pip install wenxin-api"命令安装
from wenxin_api.tasks.text_to_image import TextToImage
wenxin_api.ak = "HL2IUa0gDfGKSAHAG6O2GGG2G3WbEMCv"
wenxin_api.sk = "4QOKIOm5G9CICZ5udFiLHmpacLosV2GG"
input_dict = {
    "text": "大都市",
    "style": "蒸汽波艺术",
    "resolution": "1024*1024"
}
rst = TextToImage.create(**input_dict)
print(rst)