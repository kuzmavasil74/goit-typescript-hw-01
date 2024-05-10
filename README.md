# goit-typescript-hw-01
<div class="next-1pltc62 exffwc2" bis_skin_checked="1"><div class="next-1tdcmzv exffwc1" bis_skin_checked="1"><div class="ql-snow next-bvymu8 e1hv24360" bis_skin_checked="1"><div class="ql-editor" bis_skin_checked="1"><p><br></p><p>Для виконання домашнього завдання вам потрібно створити репозиторій <strong>goit-typescript-hw-01</strong> та створити проект за допомогою <a href="https://vitejs.dev/" rel="noopener noreferrer" target="_blank"><strong>Vite</strong></a>.</p><p><br></p><p>У папці <strong>src</strong> створіть дві папки: <strong>basic</strong> та <strong>generics</strong>. У цих папках ви будете створювати <strong>.ts</strong> файли для кожного завдання.</p><p><br></p><p><strong class="ql-size-large">Базові типи</strong></p><p>Метою цього блоку завдань є закріплення ваших навичок роботи з базовими типами <strong>TypeScript</strong>.</p><p><br></p><p><strong>Завдання 1</strong></p><p>Виконуйте це завдання у файлі <code><strong>src/basic/1.ts</strong></code>.</p><p><br></p><p>Є наступний JavaScript код:</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-ebnf" spellcheck="false" data-highlighted="yes"><span class="hljs-attribute">const age</span> = 50;
<span class="hljs-attribute">const username</span> = <span class="hljs-string">'Max'</span>;
<span class="hljs-attribute">const toggle</span> = true;
<span class="hljs-attribute">const empty</span> = null;
<span class="hljs-attribute">const callback</span> = (a) =&gt; { return 100 + a };
</pre><button class="copy"></button></div><p><br></p><p>Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.</p><p><br></p><p><strong>Завдання 2</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/basic/2.ts</strong></code>.</p><p><br></p><p>У вас є наступний JavaScript масив:</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-ebnf" spellcheck="false" data-highlighted="yes"><span class="hljs-attribute">let person</span> = [<span class="hljs-string">'Max'</span>, 21];
</pre><button class="copy"></button></div><p>Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?</p><p><br></p><p><strong>Завдання 3</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/basic/3.ts</strong></code>.</p><p><br></p><p>Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).</p><p><br></p><p><strong>Завдання 4</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/basic/4.ts</strong></code>.</p><p><br></p><p>У вас є такі функції JavaScript:</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-javascript" spellcheck="false" data-highlighted="yes"><span class="hljs-keyword">function</span> <span class="hljs-title function_">showMessage</span>(<span class="hljs-params">message</span>) {
&nbsp; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(message);
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">calc</span>(<span class="hljs-params">num1, num2</span>) {
&nbsp; <span class="hljs-keyword">return</span> num1 + num2;
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">customError</span>(<span class="hljs-params"></span>) {
&nbsp; <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">'Error'</span>);
}
</pre><button class="copy"></button></div><p><br></p><p>Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?</p><p><br></p><p><strong>Завдання 5</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/basic/5.ts</strong></code>.</p><p><br></p><p>Типізуйте функцію <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">isWeekend</span> яка приймає день тижня з enum<span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">DayOfWeek</span> і повертає boolean значення, що вказує, чи це день робочий чи вихідний.</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-mathematica" spellcheck="false" data-highlighted="yes"><span class="hljs-variable">enum</span> <span class="hljs-variable">DayOfWeek</span> <span class="hljs-punctuation">{</span>
&nbsp; <span class="hljs-built_in">Monday</span><span class="hljs-operator">,</span>
&nbsp; <span class="hljs-built_in">Tuesday</span><span class="hljs-operator">,</span>
&nbsp; <span class="hljs-built_in">Wednesday</span><span class="hljs-operator">,</span>
&nbsp; <span class="hljs-built_in">Thursday</span><span class="hljs-operator">,</span>
&nbsp; <span class="hljs-built_in">Friday</span><span class="hljs-operator">,</span>
&nbsp; <span class="hljs-built_in">Saturday</span><span class="hljs-operator">,</span>
&nbsp; <span class="hljs-built_in">Sunday</span>
<span class="hljs-punctuation">}</span>


<span class="hljs-variable">const</span> <span class="hljs-variable">isWeekend</span> <span class="hljs-operator">=</span> <span class="hljs-punctuation">(</span><span class="hljs-variable">day</span><span class="hljs-punctuation">)</span> <span class="hljs-operator">=&gt;</span> <span class="hljs-punctuation">{</span>
<span class="hljs-punctuation">}</span>
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 6</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/basic/6.ts</strong></code>.</p><p><br></p><p>Створіть інтерфейс <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">User</span> для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-ebnf" spellcheck="false" data-highlighted="yes"><span class="hljs-attribute">const mango</span> = {
&nbsp; &nbsp; name: <span class="hljs-string">'Mango'</span>,
&nbsp; &nbsp; age: 30,
&nbsp; &nbsp; email: <span class="hljs-string">'john@example.com'</span>,
&nbsp; &nbsp; address: {
&nbsp; &nbsp; &nbsp; &nbsp; city: <span class="hljs-string">'New York'</span>,
&nbsp; &nbsp; &nbsp; &nbsp; country: <span class="hljs-string">'USA'</span>
&nbsp; &nbsp; }
};

<span class="hljs-attribute">const poly</span> = {
&nbsp; &nbsp; name: <span class="hljs-string">'Mango'</span>,
&nbsp; &nbsp; age: 30,
&nbsp; &nbsp; email: <span class="hljs-string">'john@example.com'</span>
};
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 7 </strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/basic/7.ts</strong></code>.</p><p><br></p><p>У вас є два об'єкти:</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-javascript" spellcheck="false" data-highlighted="yes"><span class="hljs-keyword">const</span> page1 = {
&nbsp; <span class="hljs-attr">title</span>: <span class="hljs-string">'The awesome page'</span>,
&nbsp; <span class="hljs-attr">likes</span>: <span class="hljs-number">100</span>,
&nbsp; <span class="hljs-attr">accounts</span>: [<span class="hljs-string">'Max'</span>, <span class="hljs-string">'Anton'</span>, <span class="hljs-string">'Nikita'</span>],
&nbsp; <span class="hljs-attr">status</span>: <span class="hljs-string">'open'</span>,
&nbsp; <span class="hljs-attr">details</span>: {
&nbsp; &nbsp; <span class="hljs-attr">createAt</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">'2021-01-01'</span>),
&nbsp; &nbsp; <span class="hljs-attr">updateAt</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-string">'2021-05-01'</span>),
&nbsp; }
}

<span class="hljs-keyword">const</span> page2 = {
&nbsp; <span class="hljs-attr">title</span>: <span class="hljs-string">'Python or Js'</span>,
&nbsp; <span class="hljs-attr">likes</span>: <span class="hljs-number">5</span>,
&nbsp; <span class="hljs-attr">accounts</span>: [<span class="hljs-string">'Alex'</span>],
&nbsp; <span class="hljs-attr">status</span>: <span class="hljs-string">'close'</span>,
}
</pre><button class="copy"></button></div><p><br></p><p>Створіть новий тип даних, який підходить для цих двох об'єктів.</p><p><br></p><p><strong class="ql-size-large">Generic типи</strong></p><p>Мета цього блоку допомогти зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями, що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також вирішувати проблеми типів у класах.</p><p><br></p><p><strong>Завдання 1</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/generics/1.ts</strong></code>.</p><p><br></p><p>Типізуйте асинхронну функцію <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">fetchData</span>, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.</p><p><br></p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-javascript" spellcheck="false" data-highlighted="yes"><span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">'axios'</span>;

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">fetchData</span>(<span class="hljs-params">url</span>) {
&nbsp; <span class="hljs-keyword">try</span> {
&nbsp; &nbsp; <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> axios.<span class="hljs-title function_">get</span>(url);
&nbsp; &nbsp; <span class="hljs-keyword">return</span> response.<span class="hljs-property">data</span>;
&nbsp; } <span class="hljs-keyword">catch</span> (error) {
&nbsp; &nbsp; <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">`Error fetching from <span class="hljs-subst">${url}</span>: <span class="hljs-subst">${error}</span>`</span>);
&nbsp; }
}
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 2</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/generics/2.ts</strong></code>.</p><p><br></p><p>У вас є тип <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">AllType</span>. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">Pick</span> та <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">generics</span> для вказівки, що поля цих параметрів належать <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">AllType</span>. Функція <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">compare</span> повинна повертати <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">AllType</span>.</p><p><br></p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-xquery" spellcheck="false" data-highlighted="yes">type AllType = {
&nbsp;<span class="hljs-built_in"> name</span>:<span class="hljs-built_in"> string</span>;
&nbsp;<span class="hljs-built_in"> position</span>:<span class="hljs-built_in"> number</span>;
&nbsp; color:<span class="hljs-built_in"> string</span>;
&nbsp; weight:<span class="hljs-built_in"> number</span>
}

<span class="hljs-keyword">function</span><span class="hljs-built_in"> compare</span> (top, bottom): AllType {
&nbsp; <span class="hljs-keyword">return</span> {
&nbsp; &nbsp;<span class="hljs-built_in"> name</span>: top<span class="hljs-built_in">.name</span>,
&nbsp; &nbsp; color: top.color,
&nbsp; &nbsp;<span class="hljs-built_in"> position</span>: bottom<span class="hljs-built_in">.position</span>,
&nbsp; &nbsp; weight: bottom.weight,
&nbsp; }
}
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 3</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/generics/3.ts</strong></code>.</p><p><br></p><p>У вас є функція <code>merge</code>, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.</p><p><br></p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-ada" spellcheck="false" data-highlighted="yes"><span class="hljs-keyword">function</span> <span class="hljs-title">merge</span> (objA, objB) {
&nbsp; <span class="hljs-keyword">return</span> <span class="hljs-type">Object.assign(objA,</span> objB);
}
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 4</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/generics/4.ts</strong></code>.</p><p><br></p><p>Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.</p><p>Використовуючи утиліту <code>Partial</code> та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.</p><p><br></p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-php" spellcheck="false" data-highlighted="yes">type User = {
&nbsp; name: <span class="hljs-keyword">string</span>;
&nbsp; surname: <span class="hljs-keyword">string</span>;
&nbsp; email: <span class="hljs-keyword">string</span>;
&nbsp; password: <span class="hljs-keyword">string</span>;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createOrUpdateUser</span>(<span class="hljs-params">initialValues: User</span>) </span>{
&nbsp; <span class="hljs-comment">// Оновлення користувача</span>
}

<span class="hljs-title function_ invoke__">createOrUpdateUser</span>({ 
  <span class="hljs-attr">email</span>: <span class="hljs-string">'user@mail.com'</span>, 
  <span class="hljs-attr">password</span>: <span class="hljs-string">'password123'</span> 
});
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 5</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/generics/5.ts</strong></code>.</p><p><br></p><p>У вас є перелік <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">UserRole</span>, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">RoleDescription</span>, який зіставлятиме кожну роль користувача з її описом.</p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-dart" spellcheck="false" data-highlighted="yes"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> UserRole {
&nbsp; admin = <span class="hljs-string">'admin'</span>,
&nbsp; editor = <span class="hljs-string">'editor'</span>,
&nbsp; guest = <span class="hljs-string">'guest'</span>,
}

<span class="hljs-comment">// Замініть наступний код на версію за допомогою Record</span>
<span class="hljs-keyword">const</span> RoleDescription = {
&nbsp; admin: <span class="hljs-string">'Admin User'</span>,
&nbsp; editor: <span class="hljs-string">'Editor User'</span>,
&nbsp; guest: <span class="hljs-string">'Guest User'</span>,
};
</pre><button class="copy"></button></div><p><br></p><p><strong>Завдання 6</strong></p><p>Виконуйте це завдання у файлі <code style="background-color: rgb(236, 239, 241);"><strong>src/generics/6.ts</strong></code>.</p><p><br></p><p>У вас є тип <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">Form</span>, який містить інформацію про форму, включаючи поле errors. Ви хочете створити новий тип <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">Params</span>, який включає всі поля з <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">Form</span>, крім <span style="color: rgb(235, 87, 87); background-color: rgba(135, 131, 120, 0.15);">errors</span>.</p><p><br></p><div class="ql-syntax-block" bis_skin_checked="1"><pre class="ql-syntax hljs language-fsharp" spellcheck="false" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Errors</span> <span class="hljs-operator">=</span> {
&nbsp; email<span class="hljs-operator">?</span><span class="hljs-operator">:</span> <span class="hljs-type">string</span>[];
&nbsp; firstName<span class="hljs-operator">?</span><span class="hljs-operator">:</span> <span class="hljs-type">string</span>[];
&nbsp; lastName<span class="hljs-operator">?</span><span class="hljs-operator">:</span> <span class="hljs-type">string</span>[];
&nbsp; phone<span class="hljs-operator">?</span><span class="hljs-operator">:</span> <span class="hljs-type">string</span>[];
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">Form</span> <span class="hljs-operator">=</span> {
&nbsp; email<span class="hljs-operator">:</span> <span class="hljs-type">string</span> <span class="hljs-operator">|</span> <span class="hljs-literal">null</span>;
&nbsp; firstName<span class="hljs-operator">:</span> <span class="hljs-type">string</span> <span class="hljs-operator">|</span> <span class="hljs-literal">null</span>;
&nbsp; lastName<span class="hljs-operator">:</span> <span class="hljs-type">string</span> <span class="hljs-operator">|</span> <span class="hljs-literal">null</span>;
&nbsp; phone<span class="hljs-operator">:</span> <span class="hljs-type">string</span> <span class="hljs-operator">|</span> <span class="hljs-literal">null</span>;
&nbsp; errors<span class="hljs-operator">:</span> Errors;
};

<span class="hljs-comment">// Реалізуйте Params так, </span>
<span class="hljs-comment">// щоб унеможливити поле 'errors' з типу Form</span>
<span class="hljs-keyword">type</span> <span class="hljs-title class_">Params</span> <span class="hljs-operator">=</span> Form;
</pre><button class="copy"></button></div></div></div></div></div>
