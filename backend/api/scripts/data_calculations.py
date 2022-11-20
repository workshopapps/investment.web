""" The Algorithm to calculate the fundamental analysis of every stock """

def normalize(score):
    """ Normalizes the score """

    if score <= 0:
        return 0
    if score > 1:
        return 1
    return score


def get_debt_to_equity_ratio_weighted_score(de_ratio: float):
    """ Calculates and returns the weighted score for debt-equity ratio """

    score = 1 / de_ratio

    return(normalize(score))


def get_gross_profit_margin_weighted_score(current_gpm: float, previous_gpm: float):
    """ Calculates and returns the weighted score for gross profit margin """
    
    gpm_score = current_gpm / 0.2

    margin_diff = previous_gpm - current_gpm

    margin_diff_score = 0

    if margin_diff <= 0:
        margin_diff_score = 0.5
    else:
        margin_diff_percent = margin_diff / (current_gpm + previous_gpm)
        margin_diff_score =  margin_diff_percent / 0.03

    score = gpm_score * margin_diff_score

    return(normalize(score))



def get_current_ratio_weighted_score(cr: float):

    """ Calculates and returns the weighted score for current ratio """

    score = cr / 2

    return normalize(score)


def get_return_on_equity_weighted_score(roe: float):
    """ Calculates and returns the weighted score for return on equity """

    score = roe / 0.4

    return normalize(score)

    

def get_quick_ratio_weighted_score(qr: float):
    """ Calculates and returns the weighted score for quick ratio """

    score = qr / 1.4
    
    return normalize(score)

    

def get_profit_earning_ratio_weighted_score(pe_ratio: float):
    """ Calculates and returns the weighted score for profit-earning ratio """

    score = 10 / pe_ratio

    return normalize(score)


def get_profit_earning_growth_weighted_score(peg_ratio: float):
    """ Calculates and returns the weighted score for profit-earning growth ratio """

    score = 0.5 / peg_ratio

    return(normalize(score))


def get_revenue_growth_weighted_score(current_rg: float, previous_rg: float):
    """ Calculates and returns the weighted score for revenue growth """

    rg_score = current_rg / 0.1
    rg_diff = previous_rg - current_rg

    diff_score = 0

    if rg_diff <= 0:
        diff_score = 0.5
    else:
        diff_percent = rg_diff / (current_rg + previous_rg)
        diff_score = diff_percent / 0.03

    score = rg_score * diff_score 

    return(normalize(score))


def get_price_to_book_weighted_score(pb_ratio: float):
    """ Calculates and returns the weighted score for price to book """

    score = 1 / pb_ratio

    return(normalize(score))


def get_price_to_sales_weighted_score(ps_score: float):
    """ Calculates and returns the weighted score for price to sales """

    score = 1 / ps_score

    return(normalize(score))


def get_dividend_yield_weighted_score(dividend_yield: float):
    """ Calculates and returns the weighted score for dividend yield """

    score = dividend_yield / 0.08

    return(normalize(score))

