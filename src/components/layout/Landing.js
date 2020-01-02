import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <section className=''>
            <div className=''>
                <div className=''>
                    <h1 className=''></h1>
                    <p className=''>
          </p>
                    <div className=''>
                        <Link to='/register' className=''>
                            Sign Up
            </Link>
                        <Link to='/login' className=''>
                            Login
            </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);