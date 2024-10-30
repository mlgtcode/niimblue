import type { TranslationKey } from ".";

/** Russian */
export const translation_ru: Record<TranslationKey, string> = {
  /* Main page */
  "main.code": "Исходный код",
  "main.built": "собрано",
  /* BrowserWarning */
  "browser_warning.lines.first": "О нет, ваш браузер не поддерживает Bluetooth и последовательный порт",
  "browser_warning.lines.second": "В любом случае, вы можете рисовать этикетки.",
  /* PrinterConnector */
  "connector.bluetooth": "Bluetooth",
  "connector.serial": "Посл. порт (USB)",
  "connector.disconnect.heartbeat": "Отключено (принтер не отвечает)",
  /* ImageEditor */
  "editor.default_text": "Текст",
  "editor.import.zpl": "Импорт ZPL",
  "editor.preview": "Предпросмотр",
  "editor.print": "Печать",
  "editor.delete": "Удалить",
  "editor.clone": "Клонировать",
  "editor.undo": "Отменить",
  "editor.redo": "Повторить",
  "editor.warning.save": "Сохранённые данные будут перезаписаны. Сохранить?",
  "editor.warning.load": "Холст будет заменён на сохранённый",
  /* PrintPreview */
  "preview.title": "Предпросмотр печати",
  "preview.postprocess": "Постобработка",
  "preview.postprocess.threshold": "Порог",
  "preview.postprocess.atkinson": "Дизеринг (Аткинсон)",
  "preview.threshold": "Порог",
  "preview.copies": "Копии",
  "preview.density": "Плотность",
  "preview.print_task": "Задача печати",
  "preview.not_implemented": "НЕ РЕАЛИЗОВАНО",
  "preview.close": "Закрыть",
  "preview.print": "Печать",
  "preview.not_connected": "Принтер не подключен",
  "preview.label_type": "Тип этикетки",
  "preview.label_type.Invalid": "Некорректный",
  "preview.label_type.WithGaps": "С промежутками",
  "preview.label_type.Black": "Чёрный",
  "preview.label_type.Continuous": "Неразрывный",
  "preview.label_type.Perforated": "С отверстиями",
  "preview.label_type.Transparent": "Прозрачный",
  "preview.label_type.PvcTag": "ПВХ",
  "preview.label_type.BlackMarkGap": "С чёрными метками",
  "preview.label_type.HeatShrinkTube": "Термоусадочная трубка",
  /* ObjectPicker */
  "editor.objectpicker.title": "Добавить объект",
  "editor.objectpicker.text": "Текст",
  "editor.objectpicker.line": "Линия",
  "editor.objectpicker.rectangle": "Прямоугольник",
  "editor.objectpicker.circle": "Круг",
  "editor.objectpicker.image": "Картинка",
  "editor.objectpicker.qrcode": "QR Код",
  "editor.objectpicker.barcode": "Штрих-код",
  /* IconPicker */
  "editor.iconpicker.title": "Добавить иконку",
  "editor.iconpicker.search": "Поиск",
  "editor.iconpicker.mdi_link_title": "Подробный список здесь",
  /* LabelPropsEditor */
  "params.csv.title": "Динамические данные (CSV)",
  "params.csv.tip":
    "Первая строка - заголовок. Он используется для имён переменных. В качестве разделителей используются запятые.",
  "params.csv.rowsfound": "Найдено строк c данными:",
  "params.csv.enabled": "Включить",
  "params.csv.placeholders": "Переменные:",
  /* LabelPropsEditor */
  "params.label.menu_title": "Настройки этикетки",
  "params.label.label_title": "Своё название",
  "params.label.size": "Размер",
  "params.label.mm": "мм",
  "params.label.dpmm": "пикс/мм",
  "params.label.px": "пикс.",
  "params.label.direction": "Печатать",
  "params.label.direction.left": "Слева",
  "params.label.direction.top": "Сверху",
  "params.label.apply": "Применить",
  "params.label.current": "Текущие параметры:",
  "params.label.save_template": "Сохранить как шаблон",
  "params.label.head_density": "Плотность пикселей",
  "params.label.head_density.help": "Вычисление: DPI / 25.4",
  "params.label.warning.width": "Ширина этикетки слишком велика для принтера:",
  "params.label.warning.direction": "Рекомендуемое направление печати для вашего принтера:",
  /* TextParamsControls */
  "params.text.fetch_fonts": "Получить список шрифтов",
  "params.text.align.left": "Выравнивание текста: Слева",
  "params.text.align.center": "Выравнивание текста: По центру",
  "params.text.align.right": "Выравнивание текста: Справа",
  "params.text.vorigin": "Вертикальная привязка",
  "params.text.vorigin.top": "Сверху",
  "params.text.vorigin.center": "Снизу",
  "params.text.vorigin.bottom": "Снизу",
  "params.text.bold": "Полужирный",
  "params.text.font_size": "Размер шрифта",
  "params.text.font_size.up": "Увеличить размер шрифта",
  "params.text.font_size.down": "Уменьшить размер шрифта",
  "params.text.line_height": "Межстрочный интервал",
  "params.text.font_family": "Шрифт",
  "params.text.invert_colors": "Инвертировать цвета",
  "params.text.edit": "Редактировать во всплывающем диалоге",
  "params.text.edit.title": "Редактирование текста",
  "params.variables.insert": "Вставить переменную",
  "params.variables.insert.datetime": "Дата и время",
  "params.variables.insert.date": "Дата",
  "params.variables.insert.time": "Время",
  /* GenericObjectParamsControls */
  "params.generic.center.vertical": "Выровнять вертикально",
  "params.generic.center.horizontal": "Выровнять горизонтально",
  /* QRCodeParamsControls */
  "params.qrcode.ecl": "Уровень коррекции ошибок",
  /* BarcodeParamsControls */
  "params.barcode.encoding": "Тип",
  "params.barcode.content": "Содержимое",
  "params.barcode.scale": "Масштаб",
  "params.barcode.font_size": "Размер шрифта",
  "params.barcode.enable_caption": "Показывать надпись",
  /* SavedLabelsMenu */
  "params.saved_labels.menu_title": "Сохранить/загрузить (хранилище браузера)",
  "params.saved_labels.save.json": "Экспорт JSON",
  "params.saved_labels.save.browser": "Сохранить",
  "params.saved_labels.save.browser.replace": "Сохранить (заменить)",
  "params.saved_labels.load.json": "Импорт JSON",
  "params.saved_labels.load.browser": "Открыть",
  "params.saved_labels.label_title": "Название",
  "params.saved_labels.label_title.placeholder": "(необязательно)",
};
