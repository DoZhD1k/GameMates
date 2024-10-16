💡 **Структура анонимного блока**
Анонимный блок в PL/SQL — это 📜 фрагмент кода, который не имеет имени и не сохраняется в базе данных 💾. Структура состоит из трех основных разделов:

1. **DECLARE (необязательный)**: Используется для объявления переменных 📝, констант 🔒, курсоров 🔄 или пользовательских типов 📦.
2. **BEGIN**: Этот раздел содержит исполняемые операторы ⚙️. Здесь находится основная логика программы 🧠.
3. **EXCEPTION (необязательный)**: Обрабатывает любые исключения ❗ или ошибки ⚠️, возникающие во время выполнения.
4. **END**: Обозначает конец блока 🚧.

**Типы блоков в PL/SQL**

1. **Анонимные блоки**: Это неименованные блоки PL/SQL, которые встроены в приложение 📲 или выполняются интерактивно 🖥️.
2. **Процедуры**: Это именованные блоки PL/SQL. Эти блоки принимают входные параметры 🎟️, но не возвращают явно значения.
3. **Функции**: Это именованные блоки PL/SQL. Эти блоки принимают входные параметры 🎟️ и всегда возвращают значение 🔄.
4. **Пакеты**: Коллекции связанных процедур 🔗, функций ⚙️ и других элементов программы 📦.

**Правила объявления переменных**

- Переменные должны быть объявлены в разделе DECLARE 📝.
- Переменная должна иметь имя 🏷️, тип данных 📊 и, при необходимости, начальное значение ➡️.
- Имена переменных должны начинаться с буквы 🔤 и не должны превышать 30 символов 🔢.
- Тип данных должен быть тем, который распознается PL/SQL, например, `NUMBER` 🔢, `VARCHAR2` 🔤, `DATE` 📅 и т.д.

**Типы составных данных**

1. **Записи (Records)**: Коллекция полей разных типов данных 📊, объединенных в единый объект 🗂️.
2. **Коллекции**: Включают:
   - **INDEX BY tables (ассоциативные массивы)** 📚
   - **Вложенные таблицы (Nested tables)** 🗃️
   - **VARRAYs (массивы переменной длины)** 📦

**Разница между записями и INDEX BY таблицами**

- **Записи (Records)**: Позволяют объединять несколько полей 📝, возможно, разных типов данных, в одну переменную. Доступ к полям осуществляется по имени 🏷️.
- **INDEX BY таблицы**: Это коллекции элементов одного типа данных 📊, к которым можно получить доступ с использованием уникального ключа 🔑 или индекса 🔢.

**Создание записей (двумя способами)**

1. **Использование %ROWTYPE**: Использование `%ROWTYPE` позволяет создать запись 🗂️, которая имеет ту же структуру, что и строка таблицы 📋. Это удобно, когда нужно объявить переменную, представляющую строку с теми же полями, что и в таблице, без необходимости явно перечислять все поля.
   ```plsql
   DECLARE
     emp_record employees%ROWTYPE;
   BEGIN
     -- Использование записи
   END;
   ```
2. **Использование пользовательского типа (TYPE) для объявления**: Использование пользовательского типа позволяет создать запись с полями, которые могут быть заданы вручную ✍️. Это полезно, когда необходимо создать запись с определенными полями, отличающимися от структуры существующей таблицы 📊.
   ```plsql
   DECLARE
     TYPE emp_type IS RECORD (
       emp_id NUMBER,
       emp_name VARCHAR2(50),
       emp_salary NUMBER
     );
     emp_record emp_type;
   BEGIN
     -- Использование записи
   END;
   ```

**Создание INDEX BY таблицы**
INDEX BY таблица (также известная как ассоциативный массив) 📚 — это тип коллекции, который позволяет хранить данные 📦 с доступом по уникальному ключу 🔑. Такой тип коллекции полезен, когда необходимо динамически хранить данные и получать к ним доступ по индексу, который может быть не только числовым 🔢, но и строковым 🔤 (в зависимости от определения).

Ассоциативные массивы являются гибкими 🤸 и могут использоваться для быстрого доступа к данным ⚡ в памяти 🧠. Они не ограничены размером 📏, и элементы могут добавляться ➕ или удаляться ➖ в любое время. В отличие от VARRAY или вложенных таблиц, INDEX BY таблицы не сохраняются в базе данных 💾 и существуют только во время выполнения программы 🕒.

Преимущества INDEX BY таблиц:

- **Гибкость**: Они могут динамически увеличиваться и уменьшаться по мере необходимости 🔄.
- **Быстрый доступ**: Доступ к элементам осуществляется по уникальному ключу 🔑, что обеспечивает быстрый доступ к данным ⚡.
- **Простота использования**: Легко использовать для хранения промежуточных данных в памяти 🧠, что особенно полезно для сложных вычислений 🧮.

Пример использования: представим ситуацию, когда нам нужно временно хранить имена сотрудников 👥 для последующей обработки. INDEX BY таблица идеально подходит для этой задачи, так как нам не нужно заранее знать количество сотрудников, и мы можем легко получить доступ к их именам по индексу 🔢.

```plsql
DECLARE
  TYPE emp_table_type IS TABLE OF VARCHAR2(50) INDEX BY PLS_INTEGER;
  emp_names emp_table_type;
BEGIN
  emp_names(1) := 'Alice';
  emp_names(2) := 'Bob';
END;
```

**Использование атрибута %TYPE**

- Атрибут `%TYPE` используется для объявления переменной с тем же типом данных 📊, что и столбец в таблице или другая переменная. Это позволяет автоматически синхронизировать тип данных переменной с типом данных столбца таблицы 📋, обеспечивая согласованность и предотвращая ошибки ❌ при изменении типа данных столбца в будущем 🕒.

  Пример:
  ```plsql
  DECLARE
    emp_name employees.last_name%TYPE;
  BEGIN
    -- Переменная `emp_name` будет иметь тот же тип данных, что и столбец `last_name` таблицы `employees`.
  END;
  ```
  В этом примере переменная `emp_name` объявляется с тем же типом данных, что и столбец `last_name` таблицы `employees` 📋. Это полезно, когда мы хотим быть уверены, что переменная будет всегда соответствовать типу данных столбца, даже если тип данных столбца изменится в будущем 🔄.

  Дополнительное использование: `%TYPE` также можно применять для объявления переменных на основе типа данных другой переменной, что делает код более гибким и легко поддерживаемым 🤹.

**Использование атрибута %ROWTYPE**

- Атрибут `%ROWTYPE` используется для объявления переменной, которая может содержать всю строку данных 📊, выбранную из таблицы или курсора 🔄. Это позволяет работать с целой строкой таблицы 📋, не перечисляя каждое поле отдельно. Такая переменная будет включать все столбцы таблицы или все поля, возвращаемые курсором, что делает код более простым и читаемым 📖.

  Пример:
  ```plsql
  DECLARE
    emp_record employees%ROWTYPE;
  BEGIN
    -- `emp_record` может хранить всю строку таблицы `employees`.
    emp_record.employee_id := 100;
    emp_record.last_name := 'Иванов';
  END;
  ```
  В этом примере `emp_record` представляет всю строку таблицы `employees` 📋, и каждое поле этой записи можно использовать и присваивать значение по имени 🏷️. `%ROWTYPE` очень полезен для динамической работы с таблицами, так как он автоматически отражает любые изменения в структуре таблицы 📊, например, добавление новых столбцов ➕. Это предотвращает необходимость вручную обновлять определения записей в PL/SQL коде 🛠️.
  ```plsql
  DECLARE
    emp_record employees%ROWTYPE;
  BEGIN
    -- `emp_record` может хранить всю строку таблицы `employees`.
  END;
  ```

**Типы циклов**

1. **Простой цикл (Simple Loop)**: Выполняет операторы, пока не будет выполнено условие выхода (EXIT) 🚪.
2. **Цикл WHILE**: Повторяет операторы, пока указанное условие истинно ✅.
3. **Цикл FOR**: Выполняет операторы фиксированное количество раз 🔢, проходя по диапазону значений.

**Типы CASE**

1. **Простой CASE**: Сравнивает одно выражение с набором возможных значений 🔍 и выполняет соответствующий блок кода при совпадении значения.
   ```plsql
   CASE variable_name
     WHEN value1 THEN
       -- Выполнить код, если variable_name равно value1
     WHEN value2 THEN
       -- Выполнить код, если variable_name равно value2
     ELSE
       -- Выполнить код, если ни одно из значений не совпадает
   END CASE;
   ```
   Простой CASE используется, когда необходимо сравнить одно значение с набором фиксированных возможных значений 📊. Это помогает упростить код и сделать его более читаемым 📖.

2. **Поиск CASE (Searched CASE)**: Использует несколько условий вместо одного выражения и выполняет соответствующий блок кода, если условие истинно ✅.
   ```plsql
   CASE
     WHEN condition1 THEN
       -- Выполнить код, если condition1 истинно
     WHEN condition2 THEN
       -- Выполнить код, если condition2 истинно
     ELSE
       -- Выполнить код, если ни одно из условий не истинно
   END CASE;
   ```
   Поиск CASE позволяет использовать более сложные условия, чем простой CASE. Он полезен, когда нужно выполнить проверку на основе логических условий 🧠, а не просто сравнить одно значение с набором возможных значений. Это делает код более гибким и мощным 💪, особенно когда условия проверки зависят от нескольких переменных или вычислений 🧮.
   ```plsql
   CASE
     WHEN condition1 THEN ...
     WHEN condition2 THEN ...
     ELSE ...
   END CASE;
   ```

**Курсоры**
Курсор в PL/SQL — это механизм, который используется для обработки набора строк 📋, возвращаемого SQL-запросом 🔍. Курсоры позволяют поочередно получать строки из результирующего набора и работать с ними 🔄.

Пример использования курсора:
```plsql
DECLARE
  CURSOR emp_cursor IS
    SELECT employee_id, last_name, salary FROM employees;
  emp_record emp_cursor%ROWTYPE;
BEGIN
  OPEN emp_cursor;
  LOOP
    FETCH emp_cursor INTO emp_record;
    EXIT WHEN emp_cursor%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_record.employee_id || ', Name: ' || emp_record.last_name || ', Salary: ' || emp_record.salary);
  END LOOP;
  CLOSE emp_cursor;
END;
```
В этом примере объявляется курсор `emp_cursor`, который выбирает данные из таблицы `employees` 📋. После открытия курсора с помощью `OPEN` 🔓, данные извлекаются по одной строке с помощью оператора `FETCH` ⬇️, и выполняется выход из цикла, когда все строки обработаны (`%NOTFOUND`) 🚪. Наконец, курсор закрывается с помощью `CLOSE` 🔒.

**Результирующий набор**
Результирующий набор — это набор строк 📋, возвращаемых SQL-запросом после его выполнения. Он представляет собой данные, которые соответствуют условиям запроса, и может быть обработан с помощью курсоров для извлечения каждой строки поочередно 🔄.

**Неявные курсоры и их атрибуты**

- Неявные курсоры автоматически создаются PL/SQL для одиночных операторов `SELECT`, `INSERT`, `UPDATE` и `DELETE` ⚙️.
- Атрибуты:
  - `%FOUND`: Возвращает TRUE, если операция DML затронула хотя бы одну строку ✅.
  - `%NOTFOUND`: Возвращает TRUE, если операция DML не затронула ни одной строки 🚫.
  - `%ROWCOUNT`: Возвращает количество затронутых строк 🔢.
  - `%ISOPEN`: Всегда возвращает FALSE для неявных курсоров, так как они автоматически закрываются после выполнения 🔒.

**Явные курсоры**

- Явные курсоры — это пользовательские курсоры 👤, используемые для обработки запросов, возвращающих несколько строк 📋, или для обеспечения более точного управления обработкой запроса ⚙️.

**Атрибуты явных курсоров**

- `%FOUND`, `%NOTFOUND`, `%ROWCOUNT`, `%ISOPEN`: Подобны атрибутам неявных курсоров и предоставляют информацию о состоянии курсора 📊.

**Что происходит при объявлении явного курсора?**

- Выделяется память для курсора 💾, определяется SQL-запрос 🔍, но данные еще не извлекаются.

**Что происходит при открытии явного курсора?**

- Выполняется SQL-запрос 🔄, и результирующий набор создается в памяти 🧠, но данные еще не извлекаются в переменные.

**Что происходит при извлечении данных из явного курсора?**

- Данные из результирующего набора извлекаются по одной строке ⬇️ в заданные переменные.

**Что происходит при закрытии явного курсора?**

- Память, связанная с курсором 💾, освобождается, и курсор больше недоступен для извлечения данных 🚫.
