"""Build the printable A4 parent discussion sheet (no online data collection)."""
from pathlib import Path
import shutil

from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
FONT = Path('/Library/Fonts/Arial Unicode.ttf')
pdfmetrics.registerFont(TTFont('ParentSheet', str(FONT)))
output = ROOT / 'output/pdf/和老師討論準備單.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(output), pagesize=A4)
c.setTitle('和老師討論準備單')
c.setAuthor('菜菜老師')
c.setSubject('供家長列印、手寫的一頁 A4 討論準備單')
W, H = A4
L, R = 42, W - 42

def text(x, y, value, size=11, gray=0):
    c.setFillGray(gray)
    c.setFont('ParentSheet', size)
    c.drawString(x, y, value)

def line(y, left=L, right=R, gray=.55):
    c.setStrokeGray(gray)
    c.setLineWidth(.5)
    c.line(left, y, right, y)

def section(y, heading, count, hint=None):
    text(L, y, heading, 12)
    if hint:
        text(L, y - 18, hint, 9, .35)
        y -= 18
    for i in range(count):
        line(y - 25 - i * 25)
    return y - 25 * count - 31

text(L, H - 55, '和老師討論準備單', 22)
text(L, H - 78, '先記下想談的事，討論後再一起寫下約定。', 10, .3)
line(H - 94, gray=0)
text(L, H - 122, '討論日期：__________________')
text(315, H - 122, '孩子年級：__________________')
text(L, H - 151, '參與老師：________________________________________________________')
y = H - 190
y = section(y, '1. 孩子做得好的事', 2)
y = section(y, '2. 最近遇到的困難', 3, '具體例子：什麼時候、在哪裡、發生了什麼？')
y = section(y, '3. 已經試過的方法', 2)
y = section(y, '4. 最想請老師協助的事', 2)
y = section(y, '5. 討論後的約定', 2, '要做什麼？由誰協助？')
text(L, y + 2, '下次確認時間：____________________________________________________')
assert y > 60, f'Content overlaps the footer: {y}'
line(49, gray=.6)
text(L, 32, '菜菜老師｜國中特教家長補給站', 9, .3)
text(R - 156, 32, 'A4・供列印手寫・2026/10', 9, .3)
c.showPage()
c.save()
asset = ROOT / 'assets/downloads/parent-meeting-sheet.pdf'
asset.parent.mkdir(parents=True, exist_ok=True)
shutil.copyfile(output, asset)
print(output)
