$(document).ready(function() {
    var table = $('table.display').DataTable( {
        language: {
            "lengthMenu": "Показати _MENU_ записів",
            "infoFiltered": "(відфільтровано з _MAX_ записів)",
            "search": "Пошук:",
            "paginate": {
                "first": "<<",
                "previous": "<",
                "next": ">",
                "last": ">>"
            },
            "aria": {
                "sortAscending": ": активуйте, щоб сортувати колонку за зростанням",
                "sortDescending": ": активуйте, щоб сортувати колонку за спаданням"
            },
            "autoFill": {
                "cancel": "Відміна",
                "fill": "Заповнити всі клітинки з <i>%d<\/i>",
                "fillHorizontal": "Заповнити клітинки горизонтально",
                "fillVertical": "Заповнити клітинки вертикально"
            },
            "buttons": {
                "collection": "Список <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
                "colvis": "Видимість колонок",
                "colvisRestore": "Відновити видимість",
                "copy": "Копіювати",
                "copyKeys": "Нажміть ctrl або u2318 + C щоб копіювати інформацію з таблиці до вашого буферу обміну.<br \/><br \/>Щоб відмінити нажміть на це повідомлення або Esc",
                "copySuccess": {
                    "1": "Скопійовано 1 рядок в буфер обміну",
                    "_": "Скопійовано %d рядків в буфер обміну"
                },
                "copyTitle": "Копіювати в буфер обміну",
                "csv": "CSV",
                "excel": "Excel",
                "pageLength": {
                    "-1": "Показати усі рядки",
                    "1": "Показати 1 рядок",
                    "_": "Показати %d рядки"
                },
                "pdf": "PDF",
                "print": "Друкувати"
            },
            "emptyTable": "Ця таблиця не містить даних",
            "info": "Показано від _START_ по _END_ з _TOTAL_ записів",
            "infoEmpty": "Показано від 0 по 0 з 0 записів",
            "infoThousands": ",",
            "loadingRecords": "Завантаження",
            "processing": "Опрацювання...",
            "searchBuilder": {
                "add": "Додати умову",
                "button": {
                    "0": "Розширений пошук",
                    "_": "Розширений пошук (%d)"
                },
                "clearAll": "Очистити все",
                "condition": "Умова",
                "conditions": {
                    "date": {
                        "after": "Після",
                        "before": "До",
                        "between": "Між",
                        "empty": "Пусто",
                        "equals": "Дорівнює",
                        "not": "Не",
                        "notBetween": "Не між",
                        "notEmpty": "Не пусто"
                    },
                    "number": {
                        "between": "Між",
                        "empty": "Пусто",
                        "equals": "Дорівнює",
                        "gt": "Більше ніж",
                        "gte": "Більше або дорівнює",
                        "lt": "Менше ніж",
                        "lte": "Менше або дорівнює",
                        "not": "Не",
                        "notBetween": "Не між",
                        "notEmpty": "Не пусто"
                    },
                    "string": {
                        "contains": "Містить",
                        "empty": "Пусто",
                        "endsWith": "Закінчується з",
                        "equals": "Дорівнює",
                        "not": "Не",
                        "notEmpty": "Не пусто",
                        "startsWith": "Починається з"
                    }
                },
                "data": "Параметр",
                "deleteTitle": "Видалити правило фільтрування",
                "leftTitle": "Відступні критерії",
                "logicAnd": "I",
                "logicOr": "Або",
                "rightTitle": "Відступні критерії",
                "title": {
                    "0": "Розширений пошук",
                    "_": "Розширений пошук (%d)"
                },
                "value": "Значення"
            },
            "searchPanes": {
                "clearMessage": "Очистити все",
                "collapse": {
                    "0": "Пошукові Панелі",
                    "_": "Пошукові Панелі (%d)"
                },
                "count": "{total}",
                "countFiltered": "{shown} ({total})",
                "emptyPanes": "Немає Пошукових Панелей",
                "loadMessage": "Завантаження Пошукових Панелей",
                "title": "Активній фільтри - %d"
            },
            "select": {
                "1": "%d рядок вибрано",
                "_": "%d рядків вибрано",
                "cells": {
                    "1": "1 клітинку вибрано",
                    "_": "%d клітинок вибрано"
                },
                "columns": {
                    "1": "1 колонку вибрано",
                    "_": "%d колонок вибрано"
                }
            },
            "thousands": ",",
            "zeroRecords": "Не знайдено жодних записів"
        },
        responsive: true,
        fixedHeader: true,
        fixedColumns: true,
        buttons: [
            'colvis',
            {
                extend: 'collection',
                text: 'Експорт',
                buttons: [ 'excel', 'pdf', 'print']
            }            
        ],
        dom: 'Qlfrtip',
        select: true,
    } );
    table.buttons().container()
    .appendTo( $('.btns') );
} );