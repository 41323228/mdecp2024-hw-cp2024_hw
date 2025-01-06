var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲:\xa0 https://mde.tw/41323228 \n 個人網站:\xa0 https://github.com/mdecp2024/hw-41323228 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n https://mde.tw/cp2024_hw \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'W16_exam2', 'text': 'from browser import html\nfrom browser import document as doc\nimport math\n \n \ndef draw_maze(angle_degrees):\n    # 創建畫布\n    canvas = html.CANVAS(width=1200, height=1200)\n    brython_div = doc["brython_div1"]\n    brython_div <= canvas\n \n    # 取得繪圖上下文\n    ctx = canvas.getContext("2d")\n \n    # 設置參數\n    pixel_scale = 100\n    offset_x = 32 * 2\n    offset_y = 28 * 2\n    # 向右移動的偏移量\n    move_right_offset = 200\n    angle_radians = math.radians(angle_degrees)\n \n    # 定義迷宮線條\n    lines = [\n        ((0, 0), (2, 0)),\n        ((3, 0), (5, 0)),\n        ((5, 0), (5, 5)),\n        ((3, 5), (5, 5)),\n        ((4, 5), (4, 3)),\n        ((1, 3), (4, 3)),\n        ((3, 2), (3, 3)),\n        ((1, 1), (4, 1)),\n        ((4, 1), (4, 2)),\n        ((2, 1), (2, 2)),\n        ((2, 4), (3, 4)),\n        ((2, 4), (2, 5)),\n        ((1, 3), (1, 4)),\n        ((0, 2), (2, 2)),\n        ((0, 5), (2, 5)),\n        ((0, 0), (0, 5)),\n    ]\n \n    # 旋轉並繪製迷宮線條\n    ctx.strokeStyle = "blue"\n    ctx.lineWidth = 2\n    for line in lines:\n        start = line[0]\n        end = line[1]\n \n        # 旋轉起點座標\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        # 旋轉終點座標\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + move_right_offset + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + move_right_offset + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n \n    return ctx, offset_x + move_right_offset, offset_y, pixel_scale\n \n \ndef find_path():\n    \n    path = [\n        ((2.5, 0), (2.5, 0.5)),\n        ((2.5, 0.5), (4.5, 0.5)),\n        ((4.5, 0.5), (4.5, 2.5)),\n        ((4.5, 2.5), (3.5, 2.5)),\n        ((3.5, 2.5), (3.5, 1.5)),\n        ((3.5, 1.5), (2.5, 1.5)),\n        ((2.5, 1.5), (2.5, 2.5)),\n        ((2.5, 2.5), (0.5, 2.5)),\n        ((0.5, 2.5), (0.5, 4.5)),\n        ((0.5, 4.5), (1.5, 4.5)),\n        ((1.5, 4.5), (1.5, 3.5)),\n        ((1.5, 3.5), (3.5, 3.5)),\n        ((3.5, 3.5), (3.5, 4.5)),\n        ((3.5, 4.5), (2.5, 4.5)),\n        ((2.5, 4.5), (2.5, 5))\n    ]\n    return path\n \n \ndef draw_path(ctx, offset_x, offset_y, angle_degrees, path, pixel_scale):\n    angle_radians = math.radians(angle_degrees)\n    ctx.strokeStyle = "red"\n    ctx.lineWidth = 2\n    for line in path:\n        start = line[0]\n        end = line[1]\n \n        # 旋轉起點座標\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        # 旋轉終點座標\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n \n \ndef label_coordinate(ctx, offset_x, offset_y, text_angle_degrees):\n    text_angle_radians = math.radians(text_angle_degrees)\n    ctx.font = "18px Arial"\n    ctx.fillStyle = "red"\n    # 原始文字位置\n    original_x = offset_x + 10\n    original_y = offset_y - 15\n    # 旋轉後的文字位置\n    rotated_x = original_x * math.cos(text_angle_radians) - original_y * math.sin(text_angle_radians)\n    rotated_y = original_x * math.sin(text_angle_radians) + original_y * math.cos(text_angle_radians)\n    ctx.save()\n    ctx.translate(offset_x, offset_y)\n    ctx.rotate(text_angle_radians)\n    ctx.fillText("(32, 28)", 10, - 15)\n    ctx.restore()\n \n \nif __name__ == "__main__":\n    # 調整迷宮角度，這裡設定為30度，可依需求修改\n    maze_angle = 0\n    # 文字角度\n    text_angle = 0\n    ctx, offset_x, offset_y, pixel_scale = draw_maze(maze_angle)\n    path = find_path()\n    draw_path(ctx, offset_x, offset_y, maze_angle, path, pixel_scale)\n    label_coordinate(ctx, offset_x, offset_y, text_angle) \n w16_exam3', 'tags': '', 'url': 'W16_exam2.html'}, {'title': 'w16_exam3', 'text': 'from browser import html\nfrom browser import document as doc\nimport math\n \n \ndef draw_maze(angle_degrees):\n    # 創建畫布\n    canvas = html.CANVAS(width=1200, height=1200)\n    brython_div = doc["brython_div1"]\n    brython_div <= canvas\n \n    # 取得繪圖上下文\n    ctx = canvas.getContext("2d")\n \n    # 設置參數\n    pixel_scale = 100\n    offset_x = 32 * 2\n    offset_y = 28 * 2\n    # 向右移動的偏移量\n    move_right_offset = 200\n    angle_radians = math.radians(angle_degrees)\n \n    # 定義迷宮線條\n    lines = [\n        ((0, 0), (2, 0)),\n        ((3, 0), (5, 0)),\n        ((5, 0), (5, 5)),\n        ((3, 5), (5, 5)),\n        ((4, 5), (4, 3)),\n        ((1, 3), (4, 3)),\n        ((3, 2), (3, 3)),\n        ((1, 1), (4, 1)),\n        ((4, 1), (4, 2)),\n        ((2, 1), (2, 2)),\n        ((2, 4), (3, 4)),\n        ((2, 4), (2, 5)),\n        ((1, 3), (1, 4)),\n        ((0, 2), (2, 2)),\n        ((0, 5), (2, 5)),\n        ((0, 0), (0, 5)),\n    ]\n \n    # 旋轉並繪製迷宮線條\n    ctx.strokeStyle = "blue"\n    ctx.lineWidth = 2\n    for line in lines:\n        start = line[0]\n        end = line[1]\n \n        # 旋轉起點座標\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        # 旋轉終點座標\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + move_right_offset + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + move_right_offset + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n \n    return ctx, offset_x + move_right_offset, offset_y, pixel_scale\n \n \ndef find_path():\n    \n    path = [\n        ((2.5, 0), (2.5, 0.5)),\n        ((2.5, 0.5), (4.5, 0.5)),\n        ((4.5, 0.5), (4.5, 2.5)),\n        ((4.5, 2.5), (3.5, 2.5)),\n        ((3.5, 2.5), (3.5, 1.5)),\n        ((3.5, 1.5), (2.5, 1.5)),\n        ((2.5, 1.5), (2.5, 2.5)),\n        ((2.5, 2.5), (0.5, 2.5)),\n        ((0.5, 2.5), (0.5, 4.5)),\n        ((0.5, 4.5), (1.5, 4.5)),\n        ((1.5, 4.5), (1.5, 3.5)),\n        ((1.5, 3.5), (3.5, 3.5)),\n        ((3.5, 3.5), (3.5, 4.5)),\n        ((3.5, 4.5), (2.5, 4.5)),\n        ((2.5, 4.5), (2.5, 5))\n    ]\n    return path\n \n \ndef draw_path(ctx, offset_x, offset_y, angle_degrees, path, pixel_scale):\n    angle_radians = math.radians(angle_degrees)\n    ctx.strokeStyle = "red"\n    ctx.lineWidth = 2\n    for line in path:\n        start = line[0]\n        end = line[1]\n \n        # 旋轉起點座標\n        start_x_rotated = start[0] * pixel_scale * math.cos(angle_radians) - start[1] * pixel_scale * math.sin(\n            angle_radians)\n        start_y_rotated = start[0] * pixel_scale * math.sin(angle_radians) + start[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        # 旋轉終點座標\n        end_x_rotated = end[0] * pixel_scale * math.cos(angle_radians) - end[1] * pixel_scale * math.sin(\n            angle_radians)\n        end_y_rotated = end[0] * pixel_scale * math.sin(angle_radians) + end[1] * pixel_scale * math.cos(\n            angle_radians)\n \n        ctx.beginPath()\n        ctx.moveTo(\n            offset_x + start_x_rotated,\n            offset_y + start_y_rotated\n        )\n        ctx.lineTo(\n            offset_x + end_x_rotated,\n            offset_y + end_y_rotated\n        )\n        ctx.stroke()\n \n \ndef label_coordinate(ctx, offset_x, offset_y, text_angle_degrees):\n    text_angle_radians = math.radians(text_angle_degrees)\n    ctx.font = "18px Arial"\n    ctx.fillStyle = "red"\n    # 原始文字位置\n    original_x = offset_x + 10\n    original_y = offset_y - 15\n    # 旋轉後的文字位置\n    rotated_x = original_x * math.cos(text_angle_radians) - original_y * math.sin(text_angle_radians)\n    rotated_y = original_x * math.sin(text_angle_radians) + original_y * math.cos(text_angle_radians)\n    ctx.save()\n    ctx.translate(offset_x, offset_y)\n    ctx.rotate(text_angle_radians)\n    ctx.fillText("(32, 28)", 10, - 15)\n    ctx.restore()\n \n \nif __name__ == "__main__":\n    # 調整迷宮角度，這裡設定為30度，可依需求修改\n    maze_angle = 0\n    # 文字角度\n    text_angle = 0\n    ctx, offset_x, offset_y, pixel_scale = draw_maze(maze_angle)\n    path = find_path()\n    draw_path(ctx, offset_x, offset_y, maze_angle, path, pixel_scale)\n    label_coordinate(ctx, offset_x, offset_y, text_angle)\n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'w16_exam1', 'text': 'from browser import document, html\nimport math\n  \n# 初始化 HTML，確保 canvas 元素存在\ndef setup_canvas():\n    if not document.querySelector("#my_canvas"):\n        canvas = html.CANVAS(id="my_canvas", width=800, height=600)\n        document <= canvas\n  \nsetup_canvas()\n \n# Set up canvas\ncanvas = document["my_canvas"]\nctx = canvas.getContext("2d")\n \n# Set origin (32, 28)\norigin_x, origin_y = 32, 28    #自己學號 修改\n \n# Draw X-axis\nctx.beginPath()\nctx.moveTo(origin_x, origin_y)\nctx.lineTo(500, origin_y)\nctx.strokeStyle = "black"\nctx.lineWidth = 2\nctx.stroke()\n \n# Draw Y-axis\nctx.beginPath()\nctx.moveTo(origin_x, origin_y)\nctx.lineTo(origin_x, 300)\nctx.stroke()\n \n# Label origin\nctx.font = "12px Arial"\nctx.fillStyle = "black"\nctx.fillText("(32, 28)", origin_x + 5, origin_y - 5)\n \n# Draw shapes\n# Adjusted placement to fix alignment issue\n \n# Hexagon (Orange)\nhex_x, hex_y = 100, 100\nctx.beginPath()\nfor i in range(6):\n    angle = i * (2 * math.pi / 6)\n    x = hex_x + 30 * math.cos(angle)\n    y = hex_y + 30 * math.sin(angle)\n    if i == 0:\n        ctx.moveTo(x, y)\n    else:\n        ctx.lineTo(x, y)\nctx.closePath()\nctx.fillStyle = "orange"\nctx.fill()\n \n# Diamond (Teal)\nctx.beginPath()\nctx.moveTo(160, 70)\nctx.lineTo(180, 100)\nctx.lineTo(160, 130)\nctx.lineTo(140, 100)\nctx.closePath()\nctx.fillStyle = "teal"\nctx.fill()\n \n# Triangle (Teal)\nctx.beginPath()\nctx.moveTo(165, 130)\nctx.lineTo(205, 130)\nctx.lineTo(185, 100)\nctx.closePath()\nctx.fillStyle = "blue"\nctx.fill()\n \n# Circle (Pink)\nctx.beginPath()\nctx.arc(230, 100, 30, 0, 2 * math.pi)\nctx.fillStyle = "pink"\nctx.fill()\n \n# Square (Yellow)\nctx.beginPath()\nctx.rect(265, 75, 50, 50)\nctx.fillStyle = "yellow"\nctx.fill()\n \n# Rectangle (Blue)\nctx.beginPath()\nctx.rect(320, 90, 60, 20)\nctx.fillStyle = "Blue"\nctx.fill() \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'w15', 'text': "第一題：1~100 \n \u3000\u3000我是使用while迴圈下去寫，邏輯大概是如果i小於100就持續執行1+2=3 3+4=7一直持續到i=100。 \n sum_result = 0 #建立變數sum_result\ni = 1 #指定i等於1\nwhile i <= 100:     #使用while迴圈把i加到等於100\n    sum_result += i   \n    i += 1\nprint(sum_result) \n 第二題：指定開頭計算 \n \u3000\u3000我一樣使用while迴圈下去寫，這次可以通過程式調整起始值所以加入了add_to函式庫進行調用。 \n #運算程式\ndef addto(start, end):   #定義函數addto\n    sum_result = 0       #設定數值sum_result=0\n    i = start            #設定i=start\n    while i <= end:      #設結束之值為end\n        sum_result += i  \n        i += 1\n    return sum_result    #終止函數運行並返回數值至result\n     \n#調用程式\nresult = addto(1, 100)   #設定起始值\nprint(result)            #列印result \n 第三題：只加偶數 \n \u3000\u3000這次可以通過程式調整起始值並讓程式判斷使程式只加偶數數字，邏輯是除以2的餘=0再加入如果不等於0就判定為單數不加入。 \n #運算程式\ndef add_only_even(start, end): #定義函數add_only_eve\n    result = 0                 #在函數內部定義一個區域變數為result\n    num = start                #初始化一個變數為num\u3000並賦值為start\n    while num <= end:          #設定一個while迴圈 循環條件為num <= end只要當前的num沒有超過end就會持續運行\n        if num % 2 == 0:       #這個if判斷式是判斷是否為偶數 餘數是否=0\n            result += num      #此語句為result=result+num\n        num += 1               #每次循環時都將num+1\n    return result              #迴圈結束後使用return返回至函數\nprint(add_only_even(1, 100))   #列印函數結果 \n 第四題：除了8都加入 \n \u3000\u3000程式邏輯為將透過str指令將整束轉為字符串，再進行判斷裡面是否含有若無則加入倒數列其中 \n def add_avoid_8(start, end):     #定義函數add_only_eve_8\n    result = 0                   #定義函數add_only_eve\n    num = start                  #初始化一個變數為num\u3000並賦值為start\n    while num <= end:            #設定一個while迴圈 循環條件為num <= end只要當前的num沒有超過end就會持續運行\n        num_str = str(num)       #將當前的整數num轉換成字符串的形式透過str語句\n        if '8' not in num_str:   #這是一個if語句他是判斷num_str字符串中是否含8\n            result += num        #此語句為result=result+num\n        num += 1                 #每次循環時都將num+1\n    return result                #迴圈結束後使用return返回至函數     \nprint(add_avoid_8(1, 100))       #列印函數結果 \n", 'tags': '', 'url': 'w15.html'}, {'title': 'w14_ex', 'text': 'from browser import document, html\nimport math\n \n# 初始化 HTML，確保 canvas 元素存在\ndef setup_canvas():\n    if not document.querySelector("#my_canvas"):\n        canvas = html.CANVAS(id="my_canvas", width=800, height=600)\n        document <= canvas\n \nsetup_canvas()\n \n# 判斷點 (x, y) 是否在圓內，圓的圓心為 (cx, cy)，半徑為 r\ndef is_inside_circle(x, y, cx, cy, r):\n    distance = math.sqrt((x - cx) ** 2 + (y - cy) ** 2)\n    return distance <= r\n \n# 繪製圓\ndef draw_circle(ctx, cx, cy, r):\n    ctx.beginPath()\n    ctx.arc(cx, cy, r, 0, 2 * math.pi)\n    ctx.stroke()\n \n# 獲取 canvas 上下文\ncanvas = document["my_canvas"]\nctx = canvas.getContext("2d")\n \n# 用戶輸入三個圓的圓心座標和半徑\ncircle1_center_x = float(input("輸入第一個圓的圓心 x 座標: "))\ncircle1_center_y = float(input("輸入第一個圓的圓心 y 座標: "))\ncircle1_radius = float(input("輸入第一個圓的半徑: "))\n \ncircle2_center_x = float(input("輸入第二個圓的圓心 x 座標: "))\ncircle2_center_y = float(input("輸入第二個圓的圓心 y 座標: "))\ncircle2_radius = float(input("輸入第二個圓的半徑: "))\n \ncircle3_center_x = float(input("輸入第三個圓的圓心 x 座標: "))\ncircle3_center_y = float(input("輸入第三個圓的圓心 y 座標: "))\ncircle3_radius = float(input("輸入第三個圓的半徑: "))\n \n# 繪製三個圓\ndraw_circle(ctx, circle1_center_x, circle1_center_y, circle1_radius)\ndraw_circle(ctx, circle2_center_x, circle2_center_y, circle2_radius)\ndraw_circle(ctx, circle3_center_x, circle3_center_y, circle3_radius)\n \n# 遍歷一定範圍的點來確定所屬區域並著色\nwidth = canvas.width\nheight = canvas.height\nfor x in range(0, width, 5):\n    for y in range(0, height, 5):\n        in_circle1 = is_inside_circle(x, y, circle1_center_x, circle1_center_y, circle1_radius)\n        in_circle2 = is_inside_circle(x, y, circle2_center_x, circle2_center_y, circle2_radius)\n        in_circle3 = is_inside_circle(x, y, circle3_center_x, circle3_center_y, circle3_radius)\n \n        if in_circle1 and in_circle2 and in_circle3:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "purple"  # 三個圓重疊區域設為紫色\n            ctx.fill()\n        elif in_circle1 and in_circle2:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "blue"  # 僅在圓1、圓2重疊（不含圓3重疊部分）區域設為藍色\n            ctx.fill()\n        elif in_circle1 and in_circle3:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "green"  # 僅在圓1、圓3重疊（不含圓2重疊部分）區域設為綠色\n            ctx.fill()\n        elif in_circle2 and in_circle3:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "yellow"  # 僅在圓2、圓3重疊（不含圓1重疊部分）區域設為黃色\n            ctx.fill()\n        elif in_circle1:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "cyan"  # 僅在圓1內（不含和其他圓重疊部分）區域設為青色\n            ctx.fill()\n        elif in_circle2:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "magenta"  # 僅在圓2內（不含和其他圓重疊部分）區域設為品紅\n            ctx.fill()\n        elif in_circle3:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "orange"  # 僅在圓3內（不含和其他圓重疊部分）區域設為橙色\n            ctx.fill()\n        else:\n            ctx.beginPath()\n            ctx.arc(x, y, 2, 0, 2 * math.pi)\n            ctx.fillStyle = "gray"  # 三個圓外的區域設為灰色\n            ctx.fill() \n \n #運算程式\ndef addto(start, end):   #定義函數addto\n    sum_result = 0       #設定數值sum_result=0\n    i = start            #設定i=start\n    while i <= end:      #設結束之值為end\n        sum_result += i  \n        i += 1\n    return sum_result    #終止函數運行並返回數值至result\n     \n#調用程式\nresult = addto(1, 100)   #設定起始值\nprint(result)            #列印result \n sum_result = 0 #建立變數sum_result\ni = 1 #指定i等於1\nwhile i <= 100:     #使用while迴圈把i加到等於100\n    sum_result += i   \n    i += 1\nprint(sum_result)\n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w13', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n from browser import html, document as doc, window\n \n# Create canvas element\ncanvas = html.CANVAS(width=500, height=500)  # Increase canvas size to ensure circles are fully visible\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n \n# Get the drawing context of the canvas\nctx = canvas.getContext("2d")\n \n# Draw the first empty square at (0, 0)\nwidth = 10\nheight = 10\ngs = 20  # Grid size (for spacing)\n \nctx.lineWidth = 2\nctx.strokeStyle = \'red\'  # Color for the first square\nctx.beginPath()\nctx.rect(50, 50, width * gs, height * gs)  # Draw a hollow square with offset (50, 50)\nctx.stroke()\n \n# Draw the second empty square at (100, 100)\noffset_x = 150  # Change the x-coordinate to give more space\noffset_y = 150  # Change the y-coordinate to give more space\nwidth2 = 10\nheight2 = 10\n \nctx.lineWidth = 2\nctx.strokeStyle = \'red\'  # Color for the second square\nctx.beginPath()\nctx.rect(offset_x, offset_y, width2 * gs, height2 * gs)  # Draw another hollow square\nctx.stroke()\n \n# Function to draw a circle around a square\ndef draw_outer_circle(x, y, width, height):\n    # Calculate the radius of the outer circle (half of the diagonal of the square)\n    radius = window.Math.sqrt(width ** 2 + height ** 2) / 2\n    # Calculate the center of the square\n    center_x = x + width * gs / 2\n    center_y = y + height * gs / 2\n    # Draw the outer circle\n    ctx.beginPath()\n    ctx.arc(center_x, center_y, radius * gs, 0, 2 * window.Math.PI)\n    ctx.strokeStyle = \'black\'  # Color for the outer circle\n    ctx.lineWidth = 2\n    ctx.stroke()\n \n# Draw outer circles around both squares\ndraw_outer_circle(50, 50, width, height)  # For the first square\ndraw_outer_circle(offset_x, offset_y, width2, height2)  # For the second square\n \n# Create the context menu\ncontext_menu = html.DIV(style={"position": "absolute", "display": "none", "background-color": "#fff", "border": "1px solid #ccc", "padding": "5px"})\ncontext_menu <= html.BUTTON("Option 1: Clear Canvas")\ncontext_menu <= html.BUTTON("Option 2: Draw Circle")\nbrython_div <= context_menu\n \n# Function to show context menu\ndef show_context_menu(event):\n    event.preventDefault()  # Prevent the default right-click menu\n    context_menu.style.display = "block"  # Show custom context menu\n    context_menu.style.left = f"{event.pageX}px"  # Set the position of the menu\n    context_menu.style.top = f"{event.pageY}px"\n \n# Hide the context menu when clicking elsewhere\ndef hide_context_menu(event):\n    context_menu.style.display = "none"\n \n# Attach right-click (contextmenu) event to the canvas\ncanvas.bind("contextmenu", show_context_menu)\n \n# Attach click event to document to hide the menu when clicking elsewhere\ndocument.bind("click", hide_context_menu)\n \n# Function for the menu options\ndef clear_canvas(event):\n    ctx.clearRect(0, 0, canvas.width, canvas.height)  # Clear the canvas\n    context_menu.style.display = "none"  # Hide the context menu after action\n \ndef draw_circle(event):\n    ctx.beginPath()\n    ctx.arc(200, 200, 50, 0, 2 * window.Math.PI)  # Draw a circle at the center\n    ctx.strokeStyle = \'green\'\n    ctx.stroke()\n    context_menu.style.display = "none"  # Hide the context menu after action\n \n# Attach actions to context menu buttons\ncontext_menu.children[0].bind("click", clear_canvas)  # First button: Clear canvas\ncontext_menu.children[1].bind("click", draw_circle)  # Second button: Draw a circle \n hw_13 \n 1. \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400,height = 400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 200\n\n# gs*tc = canvas width and height\n\nctx = canvas.getContext("2d")\n\nwidth=1\nheight=1\n\nfor i in range(width): \n    for j in range(height):\n     #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")\n     ctx.lineWidth=1\n     ctx.strokeStyle=\'red\'\n     ctx.beginPath();\n     ctx.rect(i*gs,j*gs,gs,gs)\n     ctx.stroke();\n     \nfor i in range(width): \n    for j in range(height):\n     #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")\n     ctx.lineWidth=1\n     ctx.strokeStyle=\'red\'\n     ctx.beginPath();\n     ctx.rect(i*gs+50,j*gs+50,gs,gs)\n     ctx.stroke(); \n', 'tags': '', 'url': 'w13.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'Final Report.html'}]};