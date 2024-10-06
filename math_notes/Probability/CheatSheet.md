# 1. Basic Probability Formulas

- **Complement Rule**: 
  $$ P(A^C) = 1 - P(A) $$

- **Addition Rule (Union of Two Events)**: 
  $$ P(A \cup B) = P(A) + P(B) - P(A \cap B) $$

- **Multiplication Rule (Intersection of Two Events)**: 
  $$ P(A \cap B) = P(A)P(B|A) = P(B)P(A|B) $$

- **Conditional Probability**: 
  $$ P(A | B) = \frac{P(A \cap B)}{P(B)}, \, P(B) > 0 $$

- **Law of Total Probability**: 
  $$ P(A) = \sum_i P(A | B_i) P(B_i) $$

- **Bayes' Theorem**: 
  $$ P(A | B) = \frac{P(B | A) P(A)}{P(B)} $$


# 2. Random Variables

## Expectation (Mean)

- **Discrete**: 
  $$ \mathbb{E}[X] = \sum_x x P(X = x) $$

- **Continuous**: 
  $$ \mathbb{E}[X] = \int_{-\infty}^{\infty} x f(x) dx $$

## Variance

- **Variance**: 
  $$ \text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 $$

## Moment Generating Function (MGF)

- **Definition**: 
  $$ M_X(t) = \mathbb{E}[e^{tX}] $$

  Can be used to derive moments:
  $$ \mathbb{E}[X^n] = \frac{d^n}{dt^n} M_X(t) \bigg|_{t=0} $$


# 3. Central Limit Theorem (CLT)

- **Theorem**: 
  If $X_1, X_2, \dots, X_n$ are i.i.d. random variables with mean $\mu$ and variance $\sigma^2$, then the sum or average of these variables approaches a normal distribution as $n$ increases:
  $$ \frac{\sum_{i=1}^{n} X_i - n\mu}{\sqrt{n}\sigma} \xrightarrow{d} N(0, 1) $$

- **Use Case**: Useful for approximating the distribution of sample means, even when the underlying distribution is not normal.


# 4. Distributions

## Uniform Distribution

### Discrete Uniform

- **PMF**: 
  $$ P(X = k) = \frac{1}{n}, \, k = 1, 2, \dots, n $$

- **CDF**: 
  $$ F_X(x) = \frac{\lfloor x \rfloor}{n}, \, 0 \leq x \leq n $$

- **MGF**: 
  $$ M_X(t) = \frac{e^{t(n+1)} - e^t}{(n+1)(e^t - 1)} $$

- **Mean**: 
  $$ \mu = \frac{n+1}{2} $$

- **Variance**: 
  $$ \sigma^2 = \frac{(n^2 - 1)}{12} $$

### Continuous Uniform

- **PDF**: 
  $$ f(x) = \frac{1}{b - a}, \, a \leq x \leq b $$

- **CDF**: 
  $$ F_X(x) = \frac{x - a}{b - a}, \, a \leq x \leq b $$

- **MGF**: 
  $$ M_X(t) = \frac{e^{tb} - e^{ta}}{t(b - a)}, \, t \neq 0 $$

- **Mean**: 
  $$ \mu = \frac{a + b}{2} $$

- **Variance**: 
  $$ \sigma^2 = \frac{(b - a)^2}{12} $$

- **Use Case**: Models outcomes where all values are equally likely, such as rolling a fair die.


## Binomial Distribution

- **PMF**: 
  $$ P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}, \, k = 0, 1, \dots, n $$

- **CDF**: 
  $$ F_X(k) = \sum_{i=0}^{k} \binom{n}{i} p^i (1 - p)^{n - i} $$

- **MGF**: 
  $$ M_X(t) = \left(1 - p + p e^t\right)^n $$

- **Mean**: 
  $$ \mu = np $$

- **Variance**: 
  $$ \sigma^2 = np(1 - p) $$

- **Use Case**: Models the number of successes in $n$ independent trials (each with probability $p$), such as flipping a coin.


## Poisson Distribution

- **PMF**: 
  $$ P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \, k = 0, 1, 2, \dots $$

- **CDF**: 
  $$ F_X(k) = \sum_{i=0}^{k} \frac{\lambda^i e^{-\lambda}}{i!} $$

- **MGF**: 
  $$ M_X(t) = \exp(\lambda(e^t - 1)) $$

- **Mean**: 
  $$ \mu = \lambda $$

- **Variance**: 
  $$ \sigma^2 = \lambda $$

- **Use Case**: Models the number of events occurring in a fixed interval, such as the number of emails received in an hour.


## Exponential Distribution

- **PDF**: 
  $$ f(x) = \lambda e^{-\lambda x}, \, x \geq 0 $$

- **CDF**: 
  $$ F_X(x) = 1 - e^{-\lambda x}, \, x \geq 0 $$

- **MGF**: 
  $$ M_X(t) = \frac{\lambda}{\lambda - t}, \, t < \lambda $$

- **Mean**: 
  $$ \mu = \frac{1}{\lambda} $$

- **Variance**: 
  $$ \sigma^2 = \frac{1}{\lambda^2} $$

- **Use Case**: Models the time between events in a Poisson process (such as time between arrivals).


## Normal Distribution (Gaussian)

- **PDF**: 
  $$ f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right) $$

- **CDF**: 
  $$ F_X(x) = \frac{1}{2} \left[ 1 + \text{erf}\left( \frac{x - \mu}{\sqrt{2\sigma^2}} \right) \right] $$

- **MGF**: 
  $$ M_X(t) = \exp\left(\mu t + \frac{\sigma^2 t^2}{2}\right) $$

- **Mean**: 
  $$ \mu $$

- **Variance**: 
  $$ \sigma^2 $$

- **Use Case**: Common in modeling natural phenomena, measurement errors, etc.


## t-Distribution (Student's t)

- **PDF**: 
  $$ f(t) = \frac{\Gamma\left(\frac{\nu + 1}{2}\right)}{\sqrt{\nu \pi} \Gamma\left(\frac{\nu}{2}\right)} \left(1 + \frac{t^2}{\nu}\right)^{-\frac{\nu + 1}{2}} $$

- **CDF**: (No simple closed form, often computed numerically or using tables.)

- **Mean**: 
  $$ \mu = 0, \, \text{for} \, \nu > 1 $$

- **Variance**: 
  $$ \sigma^2 = \frac{\nu}{\nu - 2}, \, \text{for} \, \nu > 2 $$

- **Use Case**: Used in hypothesis testing when sample sizes are small.


## Chi-Squared Distribution

- **PDF**: 
  $$ f(x) = \frac{1}{2^{k/2} \Gamma(k/2)} x^{\frac{k}{2} - 1} e^{-x/2}, \, x \geq 0 $$

- **CDF**: 
  $$ F_X(x) = \frac{\gamma\left(\frac{k}{2}, \frac{x}{2}\right)}{\Gamma\left(\frac{k}{2}\right)} $$

- **MGF**: 
  $$ M_X(t) = (1 - 2t)^{-k/2}, \, t < \frac{1}{2} $$

- **Mean**: 
  $$ \mu = k $$

- **Variance**: 
  $$ \sigma^2 = 2k $$

- **Use Case**: Common in hypothesis testing, especially for goodness-of-fit tests and variance estimation.


## F-Distribution

- **PDF**: 
  $$ f(x) = \frac{\left(\frac{d_1}{d_2}\right)^{d_1/2} \cdot x^{\frac{d_1}{2} - 1}}{B\left(\frac{d_1}{2}, \frac{d_2}{2}\right) \left(1 + \frac{d_1}{d_2} x\right)^{\frac{d_1 + d_2}{2}}}, \, x \geq 0 $$

- **CDF**: 
  (No simple closed form, generally computed using tables or numerically.)

- **Mean**: 
  $$ \mu = \frac{d_2}{d_2 - 2}, \, d_2 > 2 $$

- **Variance**: 
  $$ \sigma^2 = \frac{2d_2^2(d_1 + d_2 - 2)}{d_1(d_2 - 2)^2(d_2 - 4)}, \, d_2 > 4 $$

- **Use Case**: Common in analysis of variance (ANOVA) and regression analysis.


## Gamma Distribution

- **PDF**: 
  $$ f(x) = \frac{\lambda^\alpha x^{\alpha - 1} e^{-\lambda x}}{\Gamma(\alpha)}, \, x \geq 0 $$

- **CDF**: 
  $$ F_X(x) = \frac{\gamma(\alpha, \lambda x)}{\Gamma(\alpha)} $$

- **MGF**: 
  $$ M_X(t) = \left(1 - \frac{t}{\lambda}\right)^{-\alpha}, \, t < \lambda $$

- **Mean**: 
  $$ \mu = \frac{\alpha}{\lambda} $$

- **Variance**: 
  $$ \sigma^2 = \frac{\alpha}{\lambda^2} $$

- **Use Case**: Used to model waiting times for multiple events in a Poisson process.


# 5. Order Statistics

- **Definition**: If $X_1, X_2, \dots, X_n$ are a random sample, the $i$th order statistic is the $i$th smallest value in the sample.

- **PDF of the $i$th Order Statistic**: 
  $$ f_{X_{(i)}}(x) = \frac{n!}{(i-1)!(n-i)!} F(x)^{i-1} (1 - F(x))^{n-i} f(x) $$